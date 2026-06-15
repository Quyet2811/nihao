UNIVERSITY_CERTIFICATES["UL"] = {
    "IELTS": {
        lang: "m-anh", 
        levels: {
            "5.5": { score: 8.0, text: "IELTS 5.5 (Quy đổi 8.0đ)" },
            "6.0": { score: 8.5, text: "IELTS 6.0 (Quy đổi 8.5đ)" },
            "6.5": { score: 9.0, text: "IELTS 6.5 (Quy đổi 9.0đ)" },
            "7.0": { score: 9.5, text: "IELTS 7.0 (Quy đổi 9.5đ)" },
            "7.5":{ score: 10.0, text:" IELTS >= 7.5 (Quy đổi 10đ)" }
        }
    },
    "TOEFL iBT": {
      lang: "m-anh",
      levels: {
        "72-78":{ score:8.0, text:"TOEFL(72-78) (Quy đổi 8.0đ)"},
        "79-87":{ score:8.5, text:"TOEFL(79-87) (Quy đổi 8.5đ)"},
        "88-95":{ score:9.0, text:"TOEFL(88-95) (Quy đổi 9.0đ)"},
        "96-101":{ score:9.5, text:"TOEFL(96-101) (Quy đổi 9.5đ)"},
        "102-120":{ score:10.0, text:"TOEFL(102-120) (Quy đổi 10.0đ)"}
        }
    }
};
UNIVERSITY_DATABASE["UL"] = {
    name: "Trường Đại học Luật (ĐHQGHN)",
    
    // 1. Báo trạng thái HSA đang chờ cập nhật
    hsaConfig: {
        status: "updating", 
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
      "7380101": {
        name: "Luật",
        combs: ["A01","A07","C01","C02","C03","C04","D01","D03","D14","D15"],
        scores: { combined:24.2,hsa: null }
      },
      "7380107": {
        name: "Luật Kinh tế (CTĐT Luật Kinh doanh)",
        combs: ["A01","A07","C01","C02","C03","C04","D01","D03","D14","D15"],
        scores: { combined:23.72,hsa: null }
      },
        "7380109": {
        name: "Luật Thương mại quốc tế",
        combs: ["A01","A07","C01","C02","C03","C04","D01","D03","D14","D15"],
        scores: { combined:24,hsa: null }
      }
    }
};
