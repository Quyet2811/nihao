UNIVERSITY_CERTIFICATES["TMU"] = {
    "IELTS": {
        lang: "m-anh", 
        levels: {
            "5.5": { score: 8.0, text: "IELTS 5.5 ( Quy đổi 8.0đ )" },
            "6.0": { score: 8.5, text: "IELTS 6.0 ( Quy đổi 8.5đ )" },
            "6.5": { score: 9.0, text: "IELTS 6.5 ( Quy đổi 9.0đ )" },
            "7.0": { score: 9.5, text: "IELTS 7.0 ( Quy đổi 9.5đ )" },
            "7.5":{ score: 10.0, text:" IELTS >= 7.5 ( Quy đổi 10đ )" }
        }
    },
    "TOEFL iBT": {
        lang:"m-anh",
        levels: {
            "72-78": { score: 8.0, text: "TOEFL iBT 72-78 ( Quy đổi 8.0đ )" },
            "79-87": { score: 8.5, text: "TOEFL iBT 79-87 ( Quy đổi 8.5đ )" },
            "88-95": { score: 9.0, text: "TOEFL iBT 88-95 ( Quy đổi 9.0đ )" },
            "96-101": { score: 9.5, text: "TOEFL iBT 96-101 ( Quy đổi 9.5đ )" },
            "102-120":{ score: 10.0, text:" TOEFL iBT >=102 ( Quy đổi 10đ )" }
        }
    },
    "HSK và HSKK": {
        lang:"m-trung",
        levels: {
           "HSK 4 (180-220)": { score: 8.0, text: "HSK 4 (180-220) và HSKK Trung cấp ( Quy đổi 8.0đ )" },
            "HSK 4 (221-260)": { score: 8.5, text: "HSK 4 (221-260) và HSKK Trung cấp ( Quy đổi 8.5đ )" },
            "HSK 4 (261-300)": { score: 9.0, text: "HSK 4 (261-300) và HSKK Trung cấp ( Quy đổi 9.0đ )" },
            "HSK 5": { score: 9.5, text: "HSK 5 và HSKK Cao cấp ( Quy đổi 9.5đ )" },
            "HSK 6":{ score: 10.0, text:" HSK 6 và HSKK Cao cấp ( Quy đổi 10đ )" }
        }
    },
    "JLPT": {
        lang:"m-nhat",
        levels: {
           "N3 (95-124)": { score: 8.0, text: "N3 (95-124) ( Quy đổi 8.0đ )" },
            "N3 (125-154)": { score: 8.5, text: "N3 (125-154) ( Quy đổi 8.5đ )" },
            "N3 (155-180)": { score: 9.0, text: "N3 (155-180) ( Quy đổi 9.0đ )" },
            "N2": { score: 9.5, text: "N2 ( Quy đổi 9.5đ )" },
            "N1":{ score: 10.0, text:" N1 ( Quy đổi 10đ )" }
        }
    },
    "TOPIK II": {
        lang:"m-han",
        levels: {
           "Cấp 4 (150-163)": { score: 8.0, text: "Cấp 4 (150-163) ( Quy đổi 8.0đ )" },
            "Cấp 4 (164-176)": { score: 8.5, text: "Cấp 4 (164-176) ( Quy đổi 8.5đ )" },
            "Cấp 4 (177-189)": { score: 9.0, text: "Cấp 4 (177-189) ( Quy đổi 9.0đ )" },
            "Cấp 5": { score: 9.5, text: "Cấp 5 ( Quy đổi 9.5đ )" },
            "Cấp 6":{ score: 10.0, text:"Cấp 6 ( Quy đổi 10đ )" }
        }
    }
};
UNIVERSITY_DATABASE["USSH"] = {
    name: "Đại học Khoa học Xã hội và Nhân văn (ĐHQGHN)",
    
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
      "QHX01": {
        name: "Báo chí",
        combs: ["A01","D01","D09","D10","D11","D14","D15"],
        scores: { combined:null,hsa: null }
      },
      "QHX02": {
        name: "Báo chí",
        combs: ["A01","D01","D09","D10","D11","D14","D15"],
        scores: { combined:null,hsa: null }
      },
      "QHX03": {
        name: "Báo chí",
        combs: ["A01","D01","D09","D10","D11","D14","D15"],
        scores: { combined:null,hsa: null }
      },
         "QHX04": {
        name: "Báo chí",
        combs: ["A01","D01","D09","D10","D11","D14","D15"],
        scores: { combined:null,hsa: null }
      },
         "QHX05": {
        name: "Báo chí",
        combs: ["A01","D01","D09","D10","D11","D14","D15"],
        scores: { combined:null,hsa: null }
      },
         "QHX06": {
        name: "Báo chí",
        combs: ["A01","D01","D09","D10","D11","D14","D15"],
        scores: { combined:null,hsa: null }
      },
         "QHX07": {
        name: "Báo chí",
        combs: ["A01","D01","D09","D10","D11","D14","D15"],
        scores: { combined:null,hsa: null }
      },
         "QHX08": {
        name: "Báo chí",
        combs: ["A01","D01","D09","D10","D11","D14","D15"],
        scores: { combined:null,hsa: null }
      },
         "QHX09": {
        name: "Báo chí",
        combs: ["A01","D01","D09","D10","D11","D14","D15"],
        scores: { combined:null,hsa: null }
      },
         "QHX10": {
        name: "Báo chí",
        combs: ["A01","D01","D09","D10","D11","D14","D15"],
        scores: { combined:null,hsa: null }
      },
         "QHX11": {
        name: "Báo chí",
        combs: ["A01","D01","D09","D10","D11","D14","D15"],
        scores: { combined:null,hsa: null }
      },
         "QHX12": {
        name: "Báo chí",
        combs: ["A01","D01","D09","D10","D11","D14","D15"],
        scores: { combined:null,hsa: null }
      },
         "QHX13": {
        name: "Báo chí",
        combs: ["A01","D01","D09","D10","D11","D14","D15"],
        scores: { combined:null,hsa: null }
      },
         "QHX14": {
        name: "Báo chí",
        combs: ["A01","D01","D09","D10","D11","D14","D15"],
        scores: { combined:null,hsa: null }
      },
         "QHX15": {
        name: "Báo chí",
        combs: ["A01","D01","D09","D10","D11","D14","D15"],
        scores: { combined:null,hsa: null }
      },
         "QHX16": {
        name: "Báo chí",
        combs: ["A01","D01","D09","D10","D11","D14","D15"],
        scores: { combined:null,hsa: null }
      },
         "QHX17": {
        name: "Báo chí",
        combs: ["A01","D01","D09","D10","D11","D14","D15"],
        scores: { combined:null,hsa: null }
      },
         "QHX18": {
        name: "Báo chí",
        combs: ["A01","D01","D09","D10","D11","D14","D15"],
        scores: { combined:null,hsa: null }
      },
         "QHX19": {
        name: "Báo chí",
        combs: ["A01","D01","D09","D10","D11","D14","D15"],
        scores: { combined:null,hsa: null }
      },
         "QHX20": {
        name: "Báo chí",
        combs: ["A01","D01","D09","D10","D11","D14","D15"],
        scores: { combined:null,hsa: null }
      },
         "QHX21": {
        name: "Báo chí",
        combs: ["A01","D01","D09","D10","D11","D14","D15"],
        scores: { combined:null,hsa: null }
      },
         "QHX22": {
        name: "Báo chí",
        combs: ["A01","D01","D09","D10","D11","D14","D15"],
        scores: { combined:null,hsa: null }
      },
         "QHX23": {
        name: "Báo chí",
        combs: ["A01","D01","D09","D10","D11","D14","D15"],
        scores: { combined:null,hsa: null }
      },
         "QHX24": {
        name: "Báo chí",
        combs: ["A01","D01","D09","D10","D11","D14","D15"],
        scores: { combined:null,hsa: null }
      },
         "QHX25": {
        name: "Báo chí",
        combs: ["A01","D01","D09","D10","D11","D14","D15"],
        scores: { combined:null,hsa: null }
      },
         "QHX26": {
        name: "Báo chí",
        combs: ["A01","D01","D09","D10","D11","D14","D15"],
        scores: { combined:null,hsa: null }
      },
         "QHX27": {
        name: "Báo chí",
        combs: ["A01","D01","D09","D10","D11","D14","D15"],
        scores: { combined:null,hsa: null }
      },
         "QHX28": {
        name: "Báo chí",
        combs: ["A01","D01","D09","D10","D11","D14","D15"],
        scores: { combined:null,hsa: null }
      },
         "QHX29": {
        name: "Báo chí",
        combs: ["A01","D01","D09","D10","D11","D14","D15"],
        scores: { combined:null,hsa: null }
      }
    }
};
