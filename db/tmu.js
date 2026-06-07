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
            // Do chưa có barem chính thức năm nay nên tạm thời trả về 0
            return 0; 
        }
    },

    // 2. Định nghĩa công thức tính điểm THPT ĐẶC THÙ cho riêng HUS
    // Nếu các trường khác không có block này, hệ thống sẽ tự dùng công thức mặc định
    thptConfig: {
        calculate: function(totalThreeSubjects, actualBonusUt, certBonusThpt) {
            // Với HUS, điểm xét tuyển bằng Tổng 3 môn + Ưu tiên + Điểm cộng từ chứng chỉ (bonus)
            return totalThreeSubjects + actualBonusUt + certBonusThpt;
        }
    },

    // 3. Danh sách các ngành học
    industries: {
      "QHT01": {
        name: "Toán học",
        combs: ["A00","A01","C01","D07","D08","X26"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:25.9,hsa: null }
