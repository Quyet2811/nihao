UNIVERSITY_CERTIFICATES["FTU"] = {
    "IELTS": {
        lang: "m-anh", 
        levels: {
            "6.5": { score: 8.5, text: "IELTS 6.5 (Quy đổi 8.5đ)" },
            "7.0": { score: 9, text: "IELTS 7.0 (Quy đổi 9đ)" },
            "7.5":{ score: 9.5, text:"IELTS 7.5 (Quy đổi 9.5đ)" },
            "8.0-9.0":{ score: 10.0, text:"IELTS 8.0-9.0 (Quy đổi 10đ)" }
        }
    },
    "TOEFL iBT": {
        lang: "m-anh",
        levels: {
            "79-92": { score: 8.5, text: "TOEFL iBT 79-92 (Quy đổi 8.5đ)" },
            "93-101": { score: 9, text: "TOEFL iBT 93-101 (Quy đổi 9đ)" },
            "102-109":{ score: 9.5, text:"TOEFL iBT 102-109 (Quy đổi 9.5đ)" },
            "110-120":{ score: 10.0, text:"TOEFL iBT 110-120 (Quy đổi 10đ)" }
        }
    },
    "Cambridge English Scale": {
        lang: "m-anh",
        levels: {
            "180-183": { score: 8.5, text: "Cambridge English Scale 180-183 (Quy đổi 8.5đ)" },
            "184-191": { score: 9, text: "Cambridge English Scale 184-191 (Quy đổi 9đ)" },
            "192-199":{ score: 9.5, text:"Cambridge English Scale 192-199 (Quy đổi 9.5đ)" },
            "200-230":{ score: 10.0, text:"Cambridge English Scale 200-230 (Quy đổi 10đ)" }
        }
    },
    "HSK và HSKK": {
        lang: "m-trung",
        levels: {
            "HSK4": { score: 9, text: "HSk4 (280-300) và HSKk Trung cấp (Quy đổi 9đ)" },
            "HSK5": { score: 9.5, text: "HSk5 và HSKk Cao cấp (Quy đổi 9.5đ)" },
            "HSK6": { score: 10, text: "HSk6 và HSKk Cao cấp (Quy đổi 10đ)" }
        }
    },
    "JLPT": {
        lang: "m-nhat",
        levels: {
            "N3": { score: 9, text: "N3 (>=130) (Quy đổi 9đ)" },
            "N2": { score: 9.5, text: "N2 (Quy đổi 9.5đ)" },
            "N1": { score: 10, text: " (Quy đổi 10đ)" }
        }
    },
    "Tiếng Pháp": {
        lang: "m-phap",
        levels: {
            "DELF B2": { score: 9, text: "DELF B2 (Quy đổi 9đ)" },
            "DALF C1": { score: 9.5, text: "DALF C1 (Quy đổi 9.5đ)" },
            "DALF C2": { score: 10, text: "DALF C2 (Quy đổi 10đ)" }
        }
    }
};
UNIVERSITY_DATABASE["FTU"] = {
    name: "Trường Đại học Ngoại thương (FTU)",
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
      "xxx": {
        name: "xxxx",
        combs: ["A01","D09","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:null,hsa: null },
        note: "Toán nhân hệ số 2"
      }
    }
};
