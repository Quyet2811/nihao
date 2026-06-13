UNIVERSITY_CERTIFICATES["TLU"] = {
    "IELTS": {
        lang: "m-anh",
        levels: {
            "5.0": { score: 8.0, text: "IELTS 5.0 ( Quy đổi 8.0đ )" },
            "5.5": { score: 8.5, text: "IELTS 5.5 ( Quy đổi 8.5đ )" },
            "6.0": { score: 9.0, text: "IELTS 6.0 ( Quy đổi 9.0đ )" },
            "6.5": { score: 9.5, text: "IELTS 6.5 ( Quy đổi 9.5đ )" },
            "7.0":{ score: 10.0, text:" IELTS >= 7.0 ( Quy đổi 10đ )" }
        }
    },
    "TOEFL iBT": {
        lang:"m-anh",
        levels: {
            "45-54": { score: 8.0, text: "TOEFL iBT 45-54 ( Quy đổi 8.0đ )" },
            "55-64": { score: 8.5, text: "TOEFL iBT 55-64 ( Quy đổi 8.5đ )" },
            "65-74": { score: 9.0, text: "TOEFL iBT 65-74 ( Quy đổi 9.0đ )" },
            "75-84": { score: 9.5, text: "TOEFL iBT 75-84 ( Quy đổi 9.5đ )" },
            "85-120":{ score: 10.0, text:" TOEFL iBT >=85 ( Quy đổi 10đ )" }
        }
    },
    "HSK và HSKK": {
        lang:"m-trung",
        levels: {
           "HSK 3 (180-240)": { score: 8.0, text: "HSK 3 (180-240) và HSKK Sơ cấp ( Quy đổi 8.0đ )" },
            "HSK 3 (241-300)": { score: 8.5, text: "HSK 3 (241-300) và HSKK Sơ cấp ( Quy đổi 8.5đ )" },
            "HSK 4 (180-240)": { score: 9.0, text: "HSK 4 (180-240) và HSKK Trung cấp ( Quy đổi 9.0đ )" },
            "HSK 4 (241-300)": { score: 9.5, text: "HSK 4 (241-300) và HSKK Trung cấp ( Quy đổi 9.5đ )" },
            "HSK 5,6":{ score: 10.0, text:" HSK 5,6 và HSKK Cao cấp ( Quy đổi 10đ )" }
        }
    },
    "JLPT": {
        lang:"m-nhat",
        levels: {
           "N4 (90-120)": { score: 8.0, text: "N4 (90-120) ( Quy đổi 8.0đ )" },
            "N4 (121-140)": { score: 8.5, text: "N4 (121-140) ( Quy đổi 8.5đ )" },
            "N4 (141-180)": { score: 9.0, text: "N4 (141-180) ( Quy đổi 9.0đ )" },
            "N3 (95-140)": { score: 9.5, text: "N3 (95-140) ( Quy đổi 9.5đ )" },
            "N3(141-180),2,1":{ score: 10.0, text:" N3(141-180),2,1 ( Quy đổi 10đ )" }
        }
    },
    "TOPIK II": {
        lang:"m-han",
        levels: {
           "Cấp 3 (120-134)": { score: 8.0, text: "Cấp 3 (120-134) ( Quy đổi 8.0đ )" },
            "Cấp 3 (135-149)": { score: 8.5, text: "Cấp 3 (135-149) ( Quy đổi 8.5đ )" },
            "Cấp 4 (150-169)": { score: 9.0, text: "Cấp 4 (150-169) ( Quy đổi 9.0đ )" },
            "Cấp 4 (170-189)": { score: 9.5, text: "Cấp 4 (170-189) ( Quy đổi 9.5đ )" },
            "Cấp 5,6 (190-300)":{ score: 10.0, text:"Cấp 5,6 (190-300) ( Quy đổi 10đ )" }
        }
    }
};
UNIVERSITY_DATABASE["TLU"] = {
    name: "Trường Đại học Thăng Long",
    hsaConfig: {
        status: "updating",
        calculate: function(rawHsa, bonusUt, certBonus) {
            // Do chưa có barem chính thức năm nay nên tạm thời trả về 0
            return 0; 
        }
    },
    thptConfig: {
        calculate: function(totalThreeSubjects, actualBonusUt, certBonusThpt) {
            // Với HUS, điểm xét tuyển bằng Tổng 3 môn + Ưu tiên + Điểm cộng từ chứng chỉ (bonus)
            return totalThreeSubjects + actualBonusUt + certBonusThpt;
        }
    },
    industries: {
        "7220201": {
            name: "Ngôn ngữ Anh",
            combs: ["D01","D14","D15"],
            scores: {combined:19.7,hsa: null }
        },
        "7220204": {
            name: "Ngôn ngữ Trung Quốc",
            combs: ["D01","D14","D15","D04"],
            scores: {combined:21.2,hsa: null }
        },
        "7220209": {
            name: "Ngôn ngữ Nhật",
            combs: ["D01","D14","D15","D06"],
            scores: {combined:16,hsa: null }
        },
        "7220210": {
            name: "Ngôn ngữ Hàn Quốc",
            combs: ["D01","D14","D15","DD2"],
            scores: {combined:19.3,hsa: null }
        },
        "7310106": {
            name: "Kinh tế quốc tế",
            combs: ["D01","D07","X25","A00","A01","X01"],
            scores: {combined:20.6,hsa: null }
        },
        "7220201": {
            name: "Việt Nam học",
            combs: ["D01","D14","D15","C00","C03","C04"],
            scores: {combined:21.88,hsa: null }
        },
        "7320104": {
            name: "Truyền thông đa phương tiện",
            combs: ["D01","D14","D15","C00","C03","C04"],
            scores: {combined:23.75,hsa: null }
        },
        "7340101": {
            name: "Quản trị kinh doanh",
            combs: ["D01","D07","X25","A00","A01","X01"],
            scores: {combined:20.2,hsa: null }
        },
        "7340115": {
            name: "Marketing",
            combs: ["D01","D07","X25","A00","A01","X01"],
            scores: {combined:22.2,hsa: null }
        },
        "7340122": {
            name: "Thương mại điện tử",
            combs: ["D01","D07","X25","A00","A01","X01"],
            scores: {combined:22.5,hsa: null }
        },
        "7340201": {
            name: "Tài chính - Ngân hàng",
            combs: ["D01","D07","X25","A00","A01","X01"],
            scores: {combined:19.5,hsa: null }
        },
        "7340301": {
            name: "Kế toán",
            combs: ["D01","D07","X25","A00","A01","X01"],
            scores: {combined:19.78,hsa: null }
        },
        "7380107": {
            name: "Luật kinh tế",
            combs: ["D01","C00","C03","C04","X01","X78"],
            scores: {combined:22.3,hsa: null }
        },
        "7480101": {
            name: "Khoa học máy tính",
            combs: ["D01","D07","X06","A00","A01","X26"],
            scores: {combined:16,hsa: null }
        },
        "7480104": {
            name: "Hệ thống thông tin",
            combs: ["D01","D07","X06","A00","A01","X26"],
            scores: {combined:16,hsa: null }
        },
        "7480201": {
            name: "Công nghệ thông tin",
            combs: ["D01","D07","X06","A00","A01","X26"],
            scores: {combined:17,hsa: null }
        },
        "7480207": {
            name: "Trí tuệ nhân tạo",
            combs: ["D01","D07","X06","A00","A01","X26"],
            scores: {combined:17,hsa: null }
        },
        "7510605": {
            name: "Logistics và quản lý chuỗi cung ứng",
            combs: ["D01","D07","X01","A00","A01","X25"],
            scores: {combined:21.4,hsa: null }
        },
        "7720301": {
            name: "Điều dưỡng",
            combs: ["A00","A02","B00","B08","B03","D07"],
            scores: {combined:19.55,hsa: null }
        },
        "7810103": {
            name: "Quản trị dịch vụ du lịch và lữ hành",
            combs: ["D01","X01","C01","C02","C03","C04"],
            scores: {combined:20.15,hsa: null }
        },
        "7810201": {
            name: "Quản trị khách sạn",
            combs: ["D01","X01","C01","C02","C03","C04"],
            scores: {combined:20.15,hsa: null }
        }
    }
};
