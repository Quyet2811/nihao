UNIVERSITY_CERTIFICATES["UEB"] = {
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
        lang:"m-anh",
        levels: {
            "72-78": { score: 8.0, text: "TOEFL iBT 72-78 (Quy đổi 8.0đ )" },
            "79-87": { score: 8.5, text: "TOEFL iBT 79-87 (Quy đổi 8.5đ )" },
            "88-95": { score: 9.0, text: "TOEFL iBT 88-95 (Quy đổi 9.0đ )" },
            "96-101": { score: 9.5, text: "TOEFL iBT 96-101 (Quy đổi 9.5đ )" },
            "102-120":{ score: 10.0, text:" TOEFL iBT 102-120 (Quy đổi 10đ )" }
        }
    }
};

UNIVERSITY_DATABASE["UEB"] = {
    name: "Trường đại học Kinh tế ( ĐHQGHN )", 
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
     "7310101": {
        name: "Ngành Kinh tế",
        combs: ["C01","C03","C04","D01","D09","D10","X01"],
        condition: { subject: "m-toan", min: 7.25 },
        scores: { combined:24.3,hsa: null }
     },
       "7310101": {
        name: "Ngành Kinh tế",
        combs: ["A01"],
        condition: { subject: "m-toan", min: 7.25 },
        scores: { combined:24.5,hsa: null }
     },
      "7310105": {
        name: "Ngành Kinh tế phát triển",
        combs: ["A01","C01","C03","C04","D01","D09","D10","X01"],
        condition: { subject: "m-toan", min: 6.0 },
        scores: { combined:24.2,hsa: null }
     },
      "7310106": {
        name: "Ngành Kinh tế quốc tế",
        combs: ["A01","C01","C03","C04","D01","D09","D10","X01"],
        condition: { subject: "m-toan", min: 6.25 },
        scores: { combined:25.72,hsa: null }
     },
      "7340101": {
        name: "Ngành Quản trị kinh doanh",
        combs: ["A01","C01","C03","C04","D01","D09","D10","X01"],
        condition: { subject: "m-toan", min: 8.0 },
        scores: { combined:24.93,hsa: null }
     },
      "7340201": {
        name: "Ngành Tài chính ngân hàng",
        combs: ["A01","C01","C03","C04","D01","D09","D10","X01"],
        condition: { subject: "m-toan", min: 8.0 },
        scores: { combined:24.25,hsa: null }
     },
      "7340301": {
        name: "Ngành Kế toán",
        combs: ["A01","C01","C03","C04","D01","D09","D10","X01"],
        condition: { subject: "m-toan", min: 7.25 },
        scores: { combined:24.2,hsa: null }
     }
   }
};
