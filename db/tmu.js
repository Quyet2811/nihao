UNIVERSITY_CERTIFICATES["TMU"] = {
    "IELTS": {
        lang: "m-anh", 
        levels: {
            "5.0": { score: 8.0,bonus: 0.5, text: "IELTS 5.0 (Quy đổi 8.0đ + cộng 0.5đ)" },
            "5.5": { score: 8.5,bonus: 0.75, text: "IELTS 5.5 (Quy đổi 8.5đ + cộng 0.75đ )" },
            "6.0": { score: 9.0,bonus: 1.0, text: "IELTS 6.0 (Quy đổi 9.0đ + cộng 1.0đ )" },
            "6.5": { score: 9.5,bonus: 1.25, text: "IELTS 6.5 (Quy đổi 9.5đ + cộng 1.25đ )" },
            "7.0":{ score: 10.0,bonus: 1.5, text:" IELTS >= 7.0 (Quy đổi 10đ + cộng 1.5đ )" }
        }
    },
    "TOEFL iBT": {
        lang:"m-anh",
        levels: {
            "45-50": { score: 8.0,bonus: 0.5, text: "TOEFL iBT 45-50 (Quy đổi 8.0đ + cộng 0.5đ)" },
            "51-64": { score: 8.5,bonus: 0.75, text: "TOEFL iBT 51-64 (Quy đổi 8.5đ + cộng 0.75đ )" },
            "65-74": { score: 9.0,bonus: 1.0, text: "TOEFL iBT 65-74 (Quy đổi 9.0đ + cộng 1.0đ )" },
            "75-84": { score: 9.5,bonus: 1.25, text: "TOEFL iBT 75-84 (Quy đổi 9.5đ + cộng 1.25đ )" },
            "85":{ score: 10.0,bonus: 1.5, text:" TOEFL iBT >=85 (Quy đổi 10đ + cộng 1.5đ )" }
        }
    },
    "VSTEP": {
        lang:"m-anh",
        levels: {
            "5.5": { score: 8.0,bonus: 0.5, text: "VSTEP 5.5 (Quy đổi 8.0đ + cộng 0.5đ)" },
            "6.0-6.5": { score: 8.5,bonus: 0.75, text: "VSTEP 6.0-6.5  (Quy đổi 8.5đ + cộng 0.75đ )" },
            "7.0-7.5": { score: 9.0,bonus: 1.0, text: "VSTEP 7.0-7.5 (Quy đổi 9.0đ + cộng 1.0đ )" },
            "8.0": { score: 9.5,bonus: 1.25, text: "VSTEP 8.0 (Quy đổi 9.5đ + cộng 1.25đ )" },
            "8.5-10":{ score: 10.0,bonus: 1.5, text:" VSTEP 8.5-10 (Quy đổi 10đ + cộng 1.5đ )" }
        }
    },
    "HSK": {
        lang:"m-trung",
        levels: {
            "3": { score: 8.0,bonus: 0.5, text: " HSK 3 (Quy đổi 8.0đ + cộng 0.5đ)" },
            "4": { score: 9.0,bonus: 1.0, text: " HSK 4 (Quy đổi 9.0đ + cộng 1.0đ )" },
            "5": { score: 9.5,bonus: 1.25, text: " HSK 5 (>180) (Quy đổi 9.5đ + cộng 1.25đ )" },
            "6":{ score: 10.0,bonus: 1.5, text:" HSK 6 (>180) (Quy đổi 10đ + cộng 1.5đ )" }
        }
    },
    "TCF": {
        lang:"m-phap",
        levels: {
            "300-349": { score: 8.0,bonus: 0.5, text: " TCF 300-349 (Quy đổi 8.0đ + cộng 0.5đ)" },
            "350-399": { score: 8.5,bonus: 0.75, text: " TCF 350-399 (Quy đổi 8.5đ + cộng 0.75đ)" },
            "400-449": { score: 9.0,bonus: 1.0, text: " TCF 400-449 (Quy đổi 9.0đ + cộng 1.0đ )" },
            "450-499": { score: 9.5,bonus: 1.25, text: " TCF 450-499  (Quy đổi 9.5đ + cộng 1.25đ )" },
            "500":{ score: 10.0,bonus: 1.5, text:" TCF >=500 (Quy đổi 10đ + cộng 1.5đ )" }
        }
    },
    "DELF": {
        lang:"m-phap",
        levels: {
            "B1": { score: 8.5,bonus: 0.75, text: " B1 (Quy đổi 8.5đ + cộng 0.75đ)" },
            "B2": { score: 9.5,bonus: 1.25, text: " B2 (Quy đổi 9.5đ + cộng 1.25đ )" },
            "C1,C2":{ score: 10.0,bonus: 1.5, text:" C1,C2 (Quy đổi 10đ + cộng 1.5đ )" }
        }
    }
};

UNIVERSITY_DATABASE["TMU"] = {
    name: "Trường đại học Thương mại (TMU)", 
    hsaConfig: {
        status: "active", 
        calculate: function(rawHsa, bonusUt, certBonus) {
            // Nếu người dùng không thi HSA (bỏ trống hoặc nhập 0) thì hệ thống bỏ qua
            if (!rawHsa || rawHsa === 0) return 0;
            // Công thức TMU: Đưa điểm ưu tiên và chứng chỉ từ thang 30 lên thang 150
            let finalScore = rawHsa + ((bonusUt + certBonus) * (150 / 30));
            // Trả về kết quả làm tròn đến 2 chữ số thập phân
            return parseFloat(finalScore.toFixed(2)); 
        }
    },

    // 2. Định nghĩa công thức tính điểm THPT ĐẶC THÙ cho riêng TMU
    // Nếu các trường khác không có block này, hệ thống sẽ tự dùng công thức mặc định
    thptConfig: {
        calculate: function(totalThreeSubjects, actualBonusUt, certBonusThpt) {
            // Với TMU, điểm xét tuyển bằng Tổng 3 môn + Ưu tiên + Điểm cộng từ chứng chỉ (bonus)
            return totalThreeSubjects + actualBonusUt + certBonusThpt;
        }
    },

    // 3. Danh sách các ngành học
    industries: {
        "TM01": {
            name: "Quản trị kinh doanh",
            combs: ["A00","A01","D01","D07"],
            scores: { combined: 25.8, hsa: 105.333 } 
        },
         "TM02": {
            name: "Quản trị kinh doanh - Chương trình định hướng chuyên sâu nghề nghiệp quốc tế - IPOP ",
            combs: ["A01","D01","D07","D09","D10","X25","X26","X27","X28"],
            condition: { subject: "m-anh", min: 6.0 },
            scores: { combined: 25.4, hsa: 102.667 } 
        },
         "TM03": {
            name: "Quản trị kinh doanh (Khởi nghiệp và phát triển kinh doanh) ",
            combs: ["A00","A01","D01","D07"],
            scores: { combined: 25.1, hsa: 100.667 } 
        },
         "TM04": {
            name: "Quản trị khách sạn ",
            combs: ["A00","A01","D01","D07"],
            scores: { combined: 25.4, hsa:102.667  } 
        },
         "TM05": {
            name: "Quản trị khách sạn (Quản trị khách sạn - Chương trình định hướng chuyên sâu nghề nghiệp quốc tế - IPOP) ",
            combs: ["A01","D01","D07","D09","D10","X25","X26","X27","X28"],
            condition: { subject: "m-anh", min: 6.0 },
            scores: { combined: 25.1, hsa: 100.667 } 
        },
         "TM06": {
            name: "Quản trị dịch vụ du lịch và lữ hành ",
            combs: ["A00","A01","D01","D07"],
            scores: { combined: 24.8, hsa: 99.12 } 
        },
         "TM07": {
            name: "Marketing (Marketing Thương mại) ",
            combs: ["A00","A01","D01","D07"],
            scores: { combined: 27.3, hsa: 115.333 } 
        },
         "TM08": {
            name: "Marketing (Marketing thương mại - Chương trình định hướng chuyên sâu nghề nghiệp quốc tế - IPOP) ",
            combs: ["A01","D01","D07","D09","D10","X25","X26","X27","X28"],
            condition: { subject: "m-anh", min: 6.0 },
            scores: { combined: 26.3, hsa: 108.667 } 
        },
         "TM09": {
            name: "Marketing (Marketing số) ",
            combs: ["A00","A01","D01","D07"],
            scores: { combined: 27.5, hsa: 116.667 } 
        },
         "TM10": {
            name: "Marketing (Quản trị Thương hiệu) ",
            combs: ["A00","A01","D01","D07"],
            scores: { combined: 26.8, hsa: 112 } 
        },
         "TM11": {
            name: "Marketing (Quản trị thương hiệu - Chương trình định hướng chuyên sâu nghề nghiệp quốc tế - IPOP) ",
            combs: ["A01","D01","D07","D09","D10","X25","X26","X27","X28"],
            condition: { subject: "m-anh", min: 6.0 },
            scores: { combined: 26.1, hsa: 107.333 } 
        },
         "TM12": {
            name: "Kế toán (Kế toán doanh nghiệp) ",
            combs: ["A00","A01","D01","D07"],
            scores: { combined: 25.8, hsa: 105.333 } 
        },
         "TM13": {
            name: "Kế toán (Kế toán tích hợp chứng chỉ quốc tế ICAEW CFAB - Chương trình định hướng chuyên sâu nghề nghiệp quốc tế - IPOP) ",
            combs: ["A01","D01","D07","D09","D10","X25","X26","X27","X28"],
            condition: { subject: "m-anh", min: 6.0 },
            scores: { combined: 24, hsa: 95.6 } 
        },
         "TM14": {
            name: " Kế toán (Kế toán công)",
            combs: ["A00","A01","D01","D07"],
            scores: { combined: 24.8, hsa: 99.12 } 
        },
        "TM15": {
            name: "Kiểm toán (Kiểm toán) ",
            combs: ["A00","A01","D01","D07"],
            scores: { combined: 25.7, hsa: 104.667 } 
        },
        "TM16": {
            name: "Kiểm toán (Kiểm toán tích hợp chứng chỉ quốc tế ICAEW CFAB - Chương trình định hướng chuyên sâu nghề nghiệp quốc tế - IPOP) ",
            combs: ["A01","D01","D07","D09","D10","X25","X26","X27","X28"],
            condition: { subject: "m-anh", min: 6.0 },
            scores: { combined: 24, hsa: 95.6 } 
        },
        "TM17": {
            name: "Logistics và Quản lý chuỗi cung ứng (Logistics và Quản lý chuỗi cung ứng) ",
            combs: ["A00","A01","D01","D07"],
            scores: { combined: 27.8, hsa: 118.667 } 
        },
        "TM18": {
            name: "Logistics và Quản lý chuỗi cung ứng (Logistics và Xuất nhập khẩu - Chương trình định hướng chuyên sâu nghề nghiệp quốc tế - IPOP) ",
            combs: ["A01","D01","D07","D09","D10","X25","X26","X27","X28"],
            condition: { subject: "m-anh", min: 6.0 },
            scores: { combined: 26.6, hsa: 110.667 } 
        },
        "TM19": {
            name: "Kinh doanh quốc tế (Thương mại quốc tế) ",
            combs: ["A00","A01","D01","D07"],
            scores: { combined: 26.8, hsa: 112 } 
        },
        "TM20": {
            name: "Kinh doanh quốc tế (Thương mại quốc tế - Chương trình định hướng chuyên sâu nghề nghiệp quốc tế - IPOP) ",
            combs: ["A01","D01","D07","D09","D10","X25","X26","X27","X28"],
            condition: { subject: "m-anh", min: 6.0 },
            scores: { combined: 26.3, hsa: 108.667 } 
        },
        "TM21": {
            name: " Kinh tế quốc tế",
            combs: ["A00","A01","D01","D07"],
            scores: { combined: 26.6, hsa: 110.667 } 
        },
        "TM22": {
            name: "Kinh tế (Quản lý kinh tế) ",
            combs: ["A00","A01","D01","D07"],
            scores: { combined: 25.1, hsa: 100.667 } 
        },
        "TM23": {
            name: "Kinh tế (Kinh tế và Quản lý đầu tư - Chương trình định hướng chuyên sâu nghề nghiệp quốc tế - IPOP) ",
            combs: ["A01","D01","D07","D09","D10","X25","X26","X27","X28"],
            condition: { subject: "m-anh", min: 6.0 },
            scores: { combined: 24.7, hsa: 98.68 } 
        },
        "TM24": {
            name: " Tài chính - Ngân hàng (Tài chính - Ngân hàng thương mại)",
            combs: ["A00","A01","D01","D07"],
            scores: { combined: 26.1, hsa: 107.333 } 
        },
        "TM25": {
            name: "Tài chính - Ngân hàng (Tài chính - Ngân hàng thương mại - Chương trình định hướng chuyên sâu nghề nghiệp quốc tế - IPOP) ",
            combs: ["A01","D01","D07","D09","D10","X25","X26","X27","X28"],
            condition: { subject: "m-anh", min: 6.0 },
            scores: { combined: 25.4, hsa: 102.667 } 
        },
        "TM26": {
            name: " Tài chính - Ngân hàng (Tài chính công)",
            combs: ["A00","A01","D01","D07"],
            scores: { combined: 25.2, hsa: 101.333 } 
        },
        "TM27": {
            name: "Tài chính - Ngân hàng (Công nghệ tài chính ngân hàng) ",
            combs: ["A00","A01","D01","D07"],
            scores: { combined: 25, hsa: 100 } 
        },
        "TM28": {
            name: "Thương mại điện tử (Quản trị thương mại điện tử) ",
            combs: ["A00","A01","D01","D07"],
            scores: { combined: 27.6, hsa: 117.333 } 
        },
        "TM29": {
            name: "Thương mại điện tử (Thương mại điện tử - Chương trình định hướng chuyên sâu nghề nghiệp quốc tế - IPOP) ",
            combs: ["A01","D01","D07","D09","D10","X25","X26","X27","X28"],
            condition: { subject: "m-anh", min: 6.0 },
            scores: { combined: 26.5, hsa: 110 } 
        },
        "TM30": {
            name: "Thương mại điện tử (Kinh doanh số) ",
            combs: ["A00","A01","D01","D07"],
            scores: { combined: 27.2, hsa: 114.667 } 
        },
        "TM31": {
            name: "Hệ thống thông tin quản lý (Quản trị Hệ thống thông tin) ",
            combs: ["A00","A01","D01","D07"],
            scores: { combined: 24.8, hsa: 99.12 } 
        },
        "TM32": {
            name: "Hệ thống thông tin quản lý (Quản trị Hệ thống thông tin - Chương trình định hướng chuyên sâu nghề nghiệp quốc tế - IPOP) ",
            combs: ["A01","D01","D07","D09","D10","X25","X26","X27","X28"],
            condition: { subject: "m-anh", min: 6.0 },
            scores: { combined: 24.2, hsa: 96.48 } 
        },
        "TM33": {
            name: "Ngôn ngữ Anh (Tiếng Anh thương mại) ",
            combs: ["A00","A01","D01","D07"],
            condition: { subject: "m-anh", min: 7.0 },
            scores: { combined: 26.1, hsa: null } 
        },
        "TM34": {
            name: "Luật kinh tế (Luật kinh tế) ",
            combs: ["A00","A01","D01","D07"],
            scores: { combined: 25.4, hsa: null } 
        },
        "TM35": {
            name: " Luật kinh tế (Luật kinh doanh - Chương trình định hướng chuyên sâu nghề nghiệp quốc tế - IPOP)",
            combs: ["A01","D01","D07","D09","D10","X25","X26","X27","X28"],
            condition: { subject: "m-anh", min: 6.0 },
            scores: { combined: 24.7, hsa: null } 
        },
        "TM36": {
            name: "Luật kinh tế (Luật thương mại quốc tế) ",
            combs: ["A00","A01","D01","D07"],
            scores: { combined: 25.1, hsa: null } 
        },
        "TM37": {
            name: "Quản trị nhân lực (Quản trị nhân lực doanh nghiệp) ",
            combs: ["A00","A01","D01","D07"],
            scores: { combined: 25.6, hsa: 104 } 
        },
        "TM38": {
            name: "Quản trị nhân lực (Quản trị nhân lực doanh nghiệp - Chương trình định hướng chuyên sâu nghề nghiệp quốc tế - IPOP) ",
            combs: ["A01","D01","D07","D09","D10","X25","X26","X27","X28"],
            condition: { subject: "m-anh", min: 6.0 },
            scores: { combined: 24.8, hsa: 99.12 } 
        },
        "TM39": {
            name: "Kinh tế số (Phân tích kinh doanh trong môi trường số) ",
            combs: ["A00","A01","D01","D07"],
            scores: { combined: 25.1, hsa: 100.667 } 
        },
        "TM40": {
            name: "Ngôn ngữ Trung Quốc (Tiếng Trung thương mại) ",
            combs: ["A00","D04","D01","D07"],
            scores: { combined: 27.4, hsa: null } 
        },
        "TM41": {
            name: "Ngôn ngữ Trung Quốc (Tiếng Trung thương mại - Chương trình định hướng chuyên sâu nghề nghiệp quốc tế - IPOP) ",
            combs: ["D04"],
            condition: { subject: "m-trung", min: 8.0 },
            scores: { combined: 26.8, hsa: null } 
        },
        "TM42": {
            name: " Quản trị kinh doanh (Tiếng Pháp thương mại)",
            combs: ["A00","A01","D01","D07","D03"],
            scores: { combined: 22.5, hsa: 89 } 
        },
        "TM43": {
            name: "Quản trị kinh doanh (Quản trị kinh doanh) - Khởi nghiệp (Thành lập doanh nghiệp) - Chương trình đào tạo song bằng quốc tế ",
            combs: ["A01","D01","D07","D09","D10","X25","X26","X27","X28"],
            scores: { combined: 22.5, hsa: 89 } 
        },
        "TM44": {
            name: "Marketing (Marketing thương mại) - Thương mại sản phẩm và dịch vụ (Bán hàng) - Chương trình đào tạo song bằng quốc tế ",
            combs: ["A01","D01","D07","D09","D10","X25","X26","X27","X28"],
            scores: { combined: 24.8, hsa: 99.12 } 
        },
        "TM45": {
            name: "Quản trị kinh doanh (Quản trị kinh doanh - Chương trình đào tạo tiến tiến) ",
            combs: ["A01","D01","D07","D09","D10","X25","X26","X27","X28"],
            scores: { combined: null, hsa: null } 
        },
        "TM46": {
            name: "Logistics và quản lý chuỗi cung ứng (Logistics và quản lý chuỗi cung ứng) - Thương mại và phân phối (Quản lý chuỗi cung ứng và phân phối) - Chương trình đào tạo song bằng quốc tế ",
            combs: [  "A01","D01","D07","D09","D10","X25","X26","X27","X28"],
            scores: { combined: null, hsa: null } 
        },
        "TM47": {
            name: "Kế toán (Kế toán tích hợp chứng chỉ quốc tế ICAEW CFAB) - Bảo hiểm, ngân hàng, tài chính: Quan hệ khách hàng (Thương mại sản phẩm ngân hàng và dịch vụ tài chính) - Chương trình đào tạo song bằng quốc tế ",
            combs: ["A01","D01","D07","D09","D10","X25","X26","X27","X28"],
            scores: { combined: null, hsa: null } 
        },
        "TM48": {
            name: " Logistics và Quản lý chuỗi cung ứng (Logistics và Quản lý vận tải đa phương thức - Chương trình định hướng chuyên sâu nghề nghiệp quốc tế - IPOP)",
            combs: ["A01","D01","D07","D09","D10","X25","X26","X27","X28"],
            condition: { subject: "m-anh", min: 6.0 },
            scores: { combined: null, hsa: null } 
        },
        "TM49": {
            name: "Kinh tế số (Phân tích dữ liệu trong kinh tế và kinh doanh - Chương trình định hướng chuyên sâu nghề nghiệp quốc tế - IPOP) ",
            combs: ["A01","D01","D07","D09","D10","X25","X26","X27","X28"],
            condition: { subject: "m-anh", min: 6.0 },
            scores: { combined: null, hsa: null } 
        },
        "TM50": {
            name: "Quản trị dịch vụ du lịch và lữ hành (Quản trị sự kiện và dịch vụ giải trí - Chương trình định hướng chuyên sâu nghề nghiệp quốc tế - IPOP) ",
            combs: ["A01","D01","D07","D09","D10","X25","X26","X27","X28"],
            condition: { subject: "m-anh", min: 6.0 },
            scores: { combined: null, hsa: null } 
        },
        "TM51": {
            name: "Khoa học máy tính (Ứng dụng trí tuệ nhân tạo trong kinh doanh) ",
            combs: ["A00","A01","D01","D07"],
            scores: { combined: null, hsa: null } 
        }
    }
};
