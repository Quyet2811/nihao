UNIVERSITY_CERTIFICATES["BAV"] = {
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
UNIVERSITY_DATABASE["BAV"] = {
    name: "Học viện Ngân hàng (BAV)",
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
      "ACT01": {
        name: "Chất lượng cao Kế toán",
        combs: ["A01","D09","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:21.57,hsa: 88 },
        note: "Toán nhân hệ số 2"
      },
      "ACT02": {
        name: "Kế toán",
        combs: ["A00","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:24.69,hsa: 99 },
        note: "Toán nhân hệ số 2"
      },
      "ACT03": {
        name: "Kế toán (Liên kết ĐH Sunderland, Anh. Cấp song bằng)",
        combs: ["A00","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:21,hsa: 85 },
        note: "Toán nhân hệ số 2"
      },
      "ACT04": {
        name: "Kiểm toán",
        combs: ["A00","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:24.88,hsa: 100 },
        note: "Toán nhân hệ số 2"
      },
      "ACT05": {
        name: "Chất lượng cao Kiểm toán",
        combs: ["D09","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:null,hsa: null },
        note: "Toán nhân hệ số 2"
      },
      "ACT06": {
        name: "Kế toán (Định hướng Nhật bản). Học viện Ngân hàng cấp bằng",
        combs: ["A00","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:null,hsa: null },
        note: "Toán nhân hệ số 2"
      },
      "BANK01": {
        name: "Chất lượng cao Ngân hàng",
        combs: ["D09","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:21.98,hsa: 90 },
        note: "Toán nhân hệ số 2"
      },
      "BANK02": {
        name: "Ngân hàng",
        combs: ["A00","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:24.93,hsa: 100 },
        note: "Toán nhân hệ số 2"
      },
      "BANK03": {
        name: "Ngân hàng số",
        combs: ["A00","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:24.82,hsa: 100 },
        note: "Toán nhân hệ số 2"
      },
      "BANK04": {
        name: "Tài chính-Ngân hàng (Liên kết ĐH Sunderland, Anh Quốc. Cấp song bằng)",
        combs: ["A00","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:21,hsa: 85 },
        note: "Toán nhân hệ số 2"
      },
      "BANK06": {
        name: "Chất lượng cao Ngân hàng và Tài chính quốc tế",
        combs: ["D09","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:22.94,hsa: 93 },
        note: "Toán nhân hệ số 2"
      },
      "BANK07": {
        name: " Chất lượng cao Ngân hàng trung ương và chính sách công",
        combs: ["D09","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:21.2, hsa: 86 },
        note: "Toán nhân hệ số 2"
      },
      "BANK08": {
        name: "Ngân hàng Tài chính - Đại học West of England (UWE), Anh (Cấp song bằng)",
        combs: ["A00","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:null,hsa: null },
        note: "Toán nhân hệ số 2"
      },
      "BUS01": {
        name: "Chất lượng cao Quản trị kinh doanh",
        combs: ["D09","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:22.1,hsa: 91 },
        note: "Toán nhân hệ số 2"
      },
      "BUS02": {
        name: "Quản trị kinh doanh",
        combs: ["A00","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:24.38,hsa: 97 },
        note: "Toán nhân hệ số 2"
      },
      "BUS03": {
        name: "Quản trị du lịch",
        combs: ["D09","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:23.53,hsa: 94 },
        note: "Toán nhân hệ số 2"
      },
      "BUS04": {
        name: "Quản trị kinh doanh (Liên kết với ĐH CityU, Hoa kỳ. cấp song bằng)",
        combs: ["A00","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:21.13,hsa: 86 },
        note: "Toán nhân hệ số 2"
      },
      "BUS06": {
        name: "Chất lượng cao Marketing số",
        combs: ["D09","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:23.1,hsa: 93 },
        note: "Toán nhân hệ số 2"
      },
      "BUS07": {
        name: "Marketing",
        combs: ["A00","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:24.72,hsa: 99 },
        note: "Toán nhân hệ số 2"
      },
      "BUS08": {
        name: "Chất lượng cao Quản trị nhân lực",
        combs: ["D09","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:null,hsa: null },
        note: "Toán nhân hệ số 2"
      },
      "BUS09": {
        name: "Chất lượng cao Kinh doanh số",
        combs: ["D09","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:null,hsa: null },
        note: "Toán nhân hệ số 2"
      },
      "BUS10": {
        name: "Quản trị kinh doanh, Hàng hải & Logistics - Đại học Genoa, CH Ý (Cấp song bằng)",
        combs: ["A00","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:null,hsa: null },
        note: "Toán nhân hệ số 2"
      },
      "BUS11": {
        name: "Marketing - Đại học West of England (UWE), Anh (Cấp song bằng)",
        combs: ["A00","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:null,hsa: null },
        note: "Toán nhân hệ số 2"
      },
      "DS01": {
        name: "Khoa học dữ liệu trong kinh tế và kinh doanh",
        combs: ["A00","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:23.84,hsa: 95 },
        note: "Toán nhân hệ số 2"
      },
      "ECON01": {
        name: "Kinh tế đầu tư",
        combs: ["D09","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:24.38,hsa: 97 },
        note: "Toán nhân hệ số 2"
      },
      "ECON02": {
        name: "Chất lượng cao Kinh tế đầu tư",
        combs: ["D09","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:22.13,hsa: 91 },
        note: "Toán nhân hệ số 2"
      },
      "ECON03": {
        name: "Kinh tế quốc tế",
        combs: ["D09","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:null,hsa: null },
        note: "Toán nhân hệ số 2"
      },
      "FIN01": {
        name: "Chất lưọng cao Tài chính",
        combs: ["D09","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:21.6, hsa: 88 },
        note: "Toán nhân hệ số 2"
      },
      "FIN02": {
        name: "Tài chính",
        combs: ["A00","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:25.16,hsa: 101 },
        note: "Toán nhân hệ số 2"
      },
       "FIN04": {
        name: "Chất lượng cao Hoạch định và tư vấn tài chính",
        combs: ["D09","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:21.05,hsa: 86 },
        note: "Toán nhân hệ số 2"
      },
       "FIN05": {
        name: "Công nghệ tài chính",
        combs: ["A00","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:24.4,hsa: 97 },
        note: "Toán nhân hệ số 2"
      },
       "FL01": {
        name: "Ngôn ngữ Anh Tài chính - Ngân hàng",
        combs: ["D09","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:23.41,hsa: 94 },
        note: "Toán nhân hệ số 2"
      },
       "FL02": {
        name: "Chất lượng cao Ngôn ngữ Anh Tài chính - Ngân hàng",
        combs: ["D09","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:21.82,hsa: 90 },
        note: "Toán nhân hệ số 2"
      },
       "IB01": {
        name: "Kinh doanh quốc tế",
        combs: ["D09","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:25.25,hsa: 102 },
        note: "Toán nhân hệ số 2"
      },
       "IB02": {
        name: "Logistics và quản lý chuỗi cung ứng",
        combs: ["D09","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:25.11,hsa: 101 },
        note: "Toán nhân hệ số 2"
      },
       "IB04": {
        name: "Chất lượng cao Kinh doanh quốc tế",
        combs: ["D09","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:23.4,hsa:94 },
        note: "Toán nhân hệ số 2"
      },
       "IB05": {
        name: "Chất lượng cao Thương mại điện tử",
        combs: ["D09","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:23.48,hsa: 94 },
        note: "Toán nhân hệ số 2"
      },
       "IB06": {
        name: "Chất lượng cao Logistics và Quản lý chuỗi cung ứng",
        combs: ["D09","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:null,hsa: null },
        note: "Toán nhân hệ số 2"
      },
       "IB07": {
        name: "Quản trị kinh doanh quốc tế - Đại học West of England (UWE), Anh (Cấp song bằng)",
        combs: ["A00","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:null,hsa: null },
        note: "Toán nhân hệ số 2"
      },
       "IT01": {
        name: "Công nghệ thông tin",
        combs: ["A00","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:23.53,hsa: 94 },
        note: "Toán nhân hệ số 2"
      },
       "MIS01": {
        name: "Hệ thống thông tin quản lý",
        combs: ["A00","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:24.75,hsa: 99 },
        note: "Toán nhân hệ số 2"
      },
       "MIS02": {
        name: "Chất lượng cao Hệ thống thông tin quản lý",
        combs: ["D09","A01","D01","D07"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:21.95,hsa: 90 },
        note: "Toán nhân hệ số 2"
      },
       "LAW01": {
        name: "Luật kinh tế",
        combs: ["C00","C03","D01","D14"],
        mainSubject: "m-van", 
        weight: 2,
        scores: { combined:24.47,hsa: 98 },
        note: "Văn nhân hệ số 2"
      },
      "LAW03": {
        name: "Chất lưọng cao Luật Kinh tế",
        combs: ["C00","C03","D01","D14"],
        mainSubject: "m-van", 
        weight: 2,
        scores: { combined:null,hsa: null },
        note: "Văn nhân hệ số 2"
      },
      "LAW04": {
        name: "Luật học",
        combs: ["C00","C03","D01","D14"],
        mainSubject: "m-van", 
        weight: 2,
        scores: { combined:null,hsa: null },
        note: "Văn nhân hệ số 2"
      }
    }
};
