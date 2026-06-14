UNIVERSITY_CERTIFICATES["UED"] = {
    
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
