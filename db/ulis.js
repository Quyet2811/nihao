UNIVERSITY_CERTIFICATES["ULIS"] = {
    "IELTS": {
        lang: "m-anh", 
        levels: {
            "5.5": { score: 8.0, text: "IELTS 5.5 (Quy đổi 8.0đ )" },
            "6.0": { score: 8.5, text: "IELTS 6.0 (Quy đổi 8.5đ )" },
            "6.5": { score: 9.0, text: "IELTS 6.5 (Quy đổi 9.0đ )" },
            "7.0": { score: 9.5, text: "IELTS 7.0 (Quy đổi 9.5đ )" },
            "7.5":{ score: 10.0, text:" IELTS >= 7.5 (Quy đổi 10đ )" }
        }
    },
    "TOEFL iBT": {
      lang: "m-anh",
      levels: {
        "72-78":{ score:8.0, text:"TOEFL iBT (Quy đổi 8.0đ )"},
        "79-87":{ score:8.5, text:"TOEFL iBT (Quy đổi 8.5đ )"},
        "88-95":{ score:9.0, text:"TOEFL iBT (Quy đổi 9.0đ )"},
        "96-101":{ score:9.5, text:"TOEFL iBT (Quy đổi 9.5đ )"},
        "102-120":{ score:10.0, text:"TOEFL iBT (Quy đổi 10.0đ )"}
        }
    }
};
UNIVERSITY_DATABASE["ULIS"] = {
    name: "Trường Đại học Ngoại ngữ (ĐHQGHN)",
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
      "CN01": {
        name: "Công nghệ thông tin",
        combs: ["A00","A01","X06"],
        scores: { combined:28.19,hsa: null }
      },
