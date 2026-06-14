UNIVERSITY_CERTIFICATES["UED"] = {
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
            "72-78": { score: 8.0, text: "TOEFL iBT 72-78 (Quy đổi 8.0đ)" },
            "79-87": { score: 8.5, text: "TOEFL iBT 79-87 (Quy đổi 8.5đ)" },
            "88-95": { score: 9.0, text: "TOEFL iBT 88-95 (Quy đổi 9.0đ)" },
            "96-101": { score: 9.5, text: "TOEFL iBT 96-101 (Quy đổi 9.5đ)" },
            "102-120": { score: 10, text: "TOEFL iBT 102-120 (Quy đổi 10đ)" }
        }
    },
    "VSTEP (Tiếng anh)": {
        lang: "m-anh",
        levels: { 
            "6": { score: 8.0, text: "VSTEP 6 (Quy đổi 8.0đ)" },
            "6.5": { score: 8.5, text: "VSTEP 6.5 (Quy đổi 8.5đ)" },
            "7-7.5": { score: 9.0, text: "VSTEP 7-7.5 (Quy đổi 9.0đ)" },
            "8": { score: 9.5, text: "VSTEP 8 (Quy đổi 9.5đ)" },
            "8.5-10": { score: 10, text: "VSTEP 8.5-10 (Quy đổi 10đ)" }
        }
    },
    "HSK và HSKK": {
        lang: "m-trung",
        levels: { 
            "HSK 4(180-220)": { score: 8.0, text: "HSK4 (180-220) và HSKK Trung cấp (Quy đổi 8.0đ)" },
            "HSK 4(221-260)": { score: 8.5, text: "HSK4 (221-260) và HSKK Trung cấp (Quy đổi 8.5đ)" },
            "HSK 4(261-300)": { score: 9.0, text: "HSK4 (261-300) và HSKK Trung cấp (Quy đổi 9.0đ)" },
            "HSK 5": { score: 9.5, text: "HSK5 và HSKK Cao cấp (Quy đổi 9.5đ)" },
            "HSK 6": { score: 10, text: "HSK6 và HSKK Cao cấp (Quy đổi 10đ)" }
        }
    }
};
UNIVERSITY_DATABASE["UED"] = {
    name: "Trường Đại học Giáo dục (ĐHQGHN)",
    hsaConfig: {
        status: "updating", 
        calculate: function(rawHsa, bonusUt, certBonus) {
            return 0; 
        }
    },
    thptConfig: {
        calculate: function(totalThreeSubjects, actualBonusUt, certBonusThpt) {
            return totalThreeSubjects + actualBonusUt + certBonusThpt;
        }
    },
    industries: {
      "QHS01": {
        name: "Sư phạm Toán học",
        combs: ["A00","A01","B00","B03","C01","C02","D01"],
        scores: { combined:28.57,hsa: null }
      },
        "QHS02": {
        name: "Sư phạm Vật lý",
        combs: ["A00","A01","A02","C01"],
        scores: { combined:28,hsa: null }
      },
        "QHS03": {
        name: "Sư phạm Hóa học",
        combs: ["A00","B00","C02","D07"],
        scores: { combined:27.74,hsa: null }
      },
        "QHS04": {
        name: "Sư phạm Sinh học",
        combs: ["A02","B00","B03","B08"],
        scores: { combined:25.37,hsa: null }
      },
        "QHS05": {
        name: "Sư phạm Khoa học Tự nhiên",
        combs: ["A00","A02","B00"],
        scores: { combined:25.58,hsa: null }
      },
        "QHS06": {
        name: "Sư phạm Ngữ văn",
        combs: ["D14","C04","C03","C00","D15","D01"],
        scores: { combined:28.45,hsa: null }
      },
        "QHS07": {
        name: "Sư phạm Lịch sử",
        combs: ["A07","C00","C03","D09","D14"],
        scores: { combined:28.99,hsa: null }
      },
        "QHS08": {
        name: "Sư phạm Lịch sử - Địa lý",
        combs: ["A07","C00"],
        scores: { combined:29.84,hsa: null }
      },
        "QHS09": {
        name: "Giáo dục Mầm non",
        combs: ["A00","C00","C03","C04","C01","C02","D01","D04"],
        scores: { combined:27.8,hsa: null }
      },
        "QHS10": {
        name: "Giáo dục Tiểu học",
        combs: ["A00","B00","C00","C01","C02","C03","C04","D01","D04"],
        scores: { combined:28.6,hsa: null }
      },
        "QHS11": {
        name: "Nhóm ngành Khoa học Giáo dục và khác",
        combs: ["A00","A01","B00","C00","C01","C02","C03","C04","D01","D04"],
        scores: { combined:25.57,hsa: null }
      },
        "QHS12": {
        name: "Nhóm ngành Tâm lý học, Tâm lý học Giáo dục",
        combs: ["A00","A01","B00","C00","C01","C02","C03","C04","D01","D04"],
        scores: { combined:25.75,hsa: null }
        }
    }
};
