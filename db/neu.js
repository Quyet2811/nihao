UNIVERSITY_CERTIFICATES["NEU"] = {
    "IELTS": {
        lang: "m-anh", 
        levels: {
            "5.5": { score: 8.5, text: "IELTS 5.5 (Quy đổi 8.5đ)" },
            "6.0": { score: 9.0, text: "IELTS 6.0 (Quy đổi 9.0đ)" },
            "6.5": { score: 9.5, text: "IELTS 6.5 (Quy đổi 9.5đ)" },
            "7.0": { score: 9.75, text: "IELTS 7.0 (Quy đổi 9.75đ)" },
            "7.5":{ score: 10.0, text:" IELTS >= 7.5 (Quy đổi 10đ)" }
        }
    },
    "TOEFL iBT": {
      lang: "m-anh",
      levels: {
        "46-59":{ score:8.5, text:"TOEFL(46-59) (Quy đổi 8.5đ)"},
        "60-78":{ score:9.0, text:"TOEFL(60-78) (Quy đổi 9.0đ)"},
        "79-93":{ score:9.5, text:"TOEFL(79-93) (Quy đổi 9.5đ)"},
        "94-101":{ score:9.75, text:"TOEFL(94-101) (Quy đổi 9.75đ)"},
        "102-120":{ score:10.0, text:"TOEFL(102-120) (Quy đổi 10.0đ)"}
        }
    }
};
UNIVERSITY_DATABASE["NEU"] = {
    name: "Đại học Kinh tế Quốc dân (NEU)",
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
    }
};
