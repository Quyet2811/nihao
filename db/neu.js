UNIVERSITY_CERTIFICATES["NEU"] = {
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
        "46-59":{ score:8.0, text:"TOEFL(46-59) (Quy đổi 8.0đ)"},
        "60-78":{ score:8.5, text:"TOEFL(60-78) (Quy đổi 8.5đ)"},
        "79-93":{ score:9.0, text:"TOEFL(79-93) (Quy đổi 9.0đ)"},
        "94-101":{ score:9.5, text:"TOEFL(94-101) (Quy đổi 9.5đ)"},
        "102-120":{ score:10.0, text:"TOEFL(102-120) (Quy đổi 10.0đ)"}
        }
    }
};
UNIVERSITY_DATABASE["NEU"] = {
    name: "Đại học Kinh tế Quốc dân (NEU)",
    hsaConfig: {
        status: "active", 
        calculate: function(rawHsa, bonusUt, certBonus) {
            return rawHsa; 
        }
    },
    thptConfig: {
        calculate: function(totalThreeSubjects, actualBonusUt, certBonusThpt) {
            return totalThreeSubjects + actualBonusUt + certBonusThpt;
        }
    },
    industries: {
      "EP01": {
        name: "Khởi nghiệp và phát triển kinh doanh (BBAE)",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:24.92,hsa: 95.44 },
        note: "..."
      },
        "EP02": {
        name: "Khoa học tính toán trong Tài chính và Bảo hiểm",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:25.5,hsa: 99.5},
        note: "..."
      },
        "EP03": {
        name: "Phân tích dữ liệu kinh tế (EDA)",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:26.78,hsa: 107.29 },
        note: "..."
      },
        "EP04": {
        name: "Kế toán tích hợp chứng chi quốc tế (ICAEW CFAB)",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:25.9,hsa: 102.3 },
        note: "..."
      },
        "EP05": {
        name: "Kinh doanh số (E-BDB)",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:26.4,hsa: 105.2 },
        note: "..."
      },
        "EP06": {
        name: "Phân tích kinh doanh (BA)",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:27.5,hsa: 111.25 },
        note: "..."
      },
        "EP07": {
        name: "Quản trị điều hành thông minh (E-SOM)",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:25.1,hsa:96.7 },
        note: "..."
      },
        "EP08": {
        name: "Quản trị chất lượng và Đổi mới (E-MQI)",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:24.2,hsa: 90.4 },
        note: "..."
      },
        "EP09": {
        name: "Công nghệ Tài chính và Ngân hàng số",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:26.92,hsa: 104.6 },
        note: "..."
      },
        "EP10": {
        name: "Tài chính và Đầu tư (BFI)",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:null,hsa: null },
        note: "..."
      },
         "EP11": {
        name: "Quản trị khách sạn quốc tế (IHME)",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:null,hsa: null },
        note: "..."
      },
        "EP12": {
        name: "Kiểm toán tích hợp chứng chỉ quốc tế (ICAEW CFAB)",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:null,hsa: null },
        note: "..."
      },
        "EP13": {
        name: "Kinh tế học tài chính (FE)",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:null,hsa: null },
        note: "..."
      },
        "EP14": {
        name: "Logistics và Quản lý chuỗi cung ứng tích hợp chứng chi quốc tế (LSIC)",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:null,hsa: null },
        note: "..."
      },
        "EP15": {
        name: "Khoa học dữ liệu",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:null,hsa: null },
        note: "..."
      },
        "EP16": {
        name: "Trí tuệ nhân tạo",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:null,hsa: null },
        note: "..."
      },
        "EP17": {
        name: "Kỹ thuật phần mềm",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:null,hsa: null },
        note: "..."
      },
        "EP18": {
        name: "Quản trị giải trí và sự kiện	",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:null,hsa: null },
        note: "..."
      },
        "EP19": {
        name: "Công nghệ Marketing",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:null,hsa: null },
        note: "..."
      },
        "EP20": {
        name: "Công nghệ Logistics và Quản trị chuỗi cung ứng",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:null,hsa: null },
        note: "..."
      },
        "EP21": {
        name: "Kiểm toán nội bộ",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:null,hsa: null },
        note: "..."
      },
        "EP22": {
        name: "Kinh tế quốc tế",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:null,hsa: null },
        note: "..."
      },
        "EP23": {
        name: "Kinh tế số",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:null,hsa: null },
        note: "..."
      },
        "EP24": {
        name: "Kinh tế Y tế",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:null,hsa: null },
        note: "..."
      },
        "EP25": {
        name: "Phát triển quốc tế",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:null,hsa: null },
        note: "..."
      },
        "EP26": {
        name: "Công nghệ môi trường và phát triển bền vững",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:null,hsa: null },
        note: "..."
      },
        "EP27": {
        name: "Quản trị công nghiệp sáng tạo",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:null,hsa: null },
        note: "..."
      },
        "EP28": {
        name: "Quản trị nhân lực quốc tế",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:null,hsa: null },
        note: "..."
      },
        "EP29": {
        name: "Quản trị rủi ro định lượng",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:null,hsa: null },
        note: "..."
      },
        "EP30": {
        name: "Toán ứng dụng",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:null,hsa: null },
        note: "..."
      },
        "EP31": {
        name: "Thẩm định giá",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:null,hsa: null },
        note: "..."
      },
        "EP32": {
        name: "Thống kê và trí tuệ kinh doanh",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:null,hsa: null },
        note: "..."
      },
        "EPMP": {
        name: "Quản lý công và Chính sách (E-PMP)",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:23,hsa: 87 },
        note: "..."
      },
        "POHE1": {
        name: "Quản trị khách sạn",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:25.61,hsa: 100.27 },
        note: "..."
      },
        "POHE2": {
        name: "Quản trị lữ hành",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:24.64,hsa: 93.48 },
        note: "..."
      },
        "POHE3": {
        name: "Truyền thông Marketing",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:27.61,hsa: 111.85 },
        note: "..."
      },
        "POHE4": {
        name: "Luật kinh doanh",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:25.5,hsa: 99.5 },
        note: "..."
      },
        "POHE5": {
        name: "Quản trị kinh doanh thương mại",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:26.29,hsa: 104.6 },
        note: "..."
      },
        "POHE6": {
        name: "Quản lý thị trường",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:24.66,hsa: 93.62 },
        note: "..."
      },
        "POHE7": {
        name: "Thẩm định giá",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:24.55,hsa: 92.85 },
        note: "..."
      },
        "EBBA": {
        name: "Quản trị kinh doanh (E-BBA)",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:25.64,hsa: 100.48 },
        note: "..."
      },
        "7340205": {
        name: "Công nghệ tài chính",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:null,hsa: null },
        note: "..."
      },
        "7480202": {
        name: "An toàn thông tin",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:25.59,hsa:100.13 },
        note: "..."
      },
        "7340204": {
        name: "Bảo hiểm",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:24.75,hsa: 94.25 },
        note: "..."
      },
        "7340116": {
        name: "Bất động sản",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:25.41,hsa: 98.87 },
        note: "..."
      },
        "7480201": {
        name: "Công nghệ thông tin",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:25.89,hsa: 102.23 },
        note: "..."
      },
        "7480104": {
        name: "Hệ thống thông tin",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:26.38,hsa: 105.09 },
        note: "..."
      },
        "7340405": {
        name: "Hệ thống thông tin quản lý",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:27.5,hsa: 111.25 },
        note: "..."
      },
        "7340301": {
        name: "Kế toán",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:27.1,hsa: 109.05 },
        note: "..."
      },
        "7480101": {
        name: "Khoa học máy tính",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:26.27,hsa:104.49 },
        note: "..."
      },
        "7340401": {
        name: "Khoa học quản lý",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:26.06,hsa: 103.33 },
        note: "..."
      },
        "7340302": {
        name: "Kiểm toán",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:28.38,hsa: 116.66 },
        note: "..."
      },
        "7620114": {
        name: "Kinh doanh nông nghiệp",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:23.75,hsa: 88.5 },
        note: "..."
      },
        "7340120": {
        name: "Kinh doanh quốc tế",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:28.6,hsa:118.2 },
        note: "..."
      },
        "7340121": {
        name: "Kinh doanh thương mại",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:28,hsa: 114 },
        note: "..."
      },
        "7310104": {
        name: "Kinh tế đầu tư",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:27.5,hsa:111.25 },
        note: "..."
      },
        "7310101_1": {
        name: "Kinh tế học",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:26.52,hsa: 105.86 },
        note: "..."
      },
        "7620115": {
        name: "Kinh tế nông nghiệp",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:24.35,hsa:91.45 },
        note: "..."
      },
        "7310105": {
        name: "Kinh tế phát triển",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:26.77,hsa: 107.24 },
        note: "..."
      },
        "7310106": {
        name: "Kinh tế quốc tế",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:28.13,hsa: 114.91 },
        note: "..."
      },
        "7850102": {
        name: "Kinh tế tài nguyên thiên nhiên",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:23.5,hsa: 88 },
        note: "..."
      },
        "7310101_2": {
        name: "Kinh tế và quản lý đô thị",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:25.8,hsa: 101.6 },
        note: "..."
      },
        "7310101_3": {
        name: "Kinh tế và quản lý nguồn nhân lực",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:26.79,hsa: 107.35 },
        note: "..."
      },
        "7510605": {
        name: "Logistics và Quản lý chuỗi cung ứng",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:28.61,hsa: 118.27 },
        note: "..."
      },
        "7380101": {
        name: "Luật",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:25.96,hsa:102.72 },
        note: "..."
      },
        "7380107": {
        name: "Luật kinh tế",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:26.75,hsa: 107.13 },
        note: "..."
      },
        "7380109": {
        name: "Luật thương mại quốc tế",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:26.44,hsa: 105.42 },
        note: "..."
      },
        "7340115": {
        name: "Marketing",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:28.12,hsa: 114.84 },
        note: "..."
      },
        "7220201": {
        name: "Ngôn ngữ Anh",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:26.51,hsa: 105.81 },
        note: "..."
      },
        "7320108": {
        name: "Quan hệ công chúng",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:28.07,hsa: 114.49 },
        note: "..."
      },

        "7340408": {
        name: "Quan hệ lao động",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:25,hsa:96 },
        note: "..."
      },
        "7340403": {
        name: "Quản lý công",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:25.42,hsa: 98.94 },
        note: "..."
      },
        "7850103": {
        name: "Quản lý đất đai",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:null,hsa: null },
        note: "..."
      },
        "7340409": {
        name: "Quản lý dự án",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:26.63,hsa: 106.46 },
        note: "..."
      },
        "7850101": {
        name: "Quản lý tài nguyên và môi trường",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:24.17,hsa: 90.19 },
        note: "..."
      },
        "7810103": {
        name: "Quản trị dịch vụ du lịch và lữ hành",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:26.06,hsa: 103.33 },
        note: "..."
      },
        "7810201": {
        name: "Quản trị khách sạn",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:26.25,hsa:104.38  },
        note: "..."
      },
        "7340101": {
        name: "Quản trị kinh doanh",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:27.1,hsa: 109.05 },
        note: "..."
      },
        "7340404": {
        name: "Quản trị nhân lực",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:27.1,hsa: 109.05 },
        note: "..."
      },
        "7340201": {
        name: "Tài chính - Ngân hàng",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:27.34,hsa: 110.37 },
        note: "..."
      },
        "7310107": {
        name: "Thống kê kinh tế",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:26.79,hsa: 107.35 },
        note: "..."
      },
        "7340122": {
        name: "Thương mại điện tử",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:28.83,hsa: 119.81 },
        note: "..."
      },
        "7310108": {
        name: "Toán kinh tế",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:26.73,hsa: 107.02 },
        note: "..."
      },
        "TT1_7340301": {
        name: "Kế toán - CT tiên tiến TT1",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:24.75,hsa: 94.25 },
        note: "..."
      },
        "TT1_7340201": {
        name: "Kế hoạch tài chính - CT tiên tiến TT1",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:24.75,hsa: 94.25 },
        note: "..."
      },
        "TT1_7340101": {
        name: "Quản trị kinh doanh - CT tiên tiến TT1",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:24.75,hsa: 94.25 },
        note: "..."
      },
        "TT2_7340201": {
        name: "Tài chính - CT tiên tiến TT2",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:25.5,hsa: 99.5 },
        note: "..."
      },
        "TT2_7340120": {
        name: "Kinh doanh quốc tế - CT tiên tiến TT2",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:25.5,hsa: 99.5 },
        note: "..."
      },
        "CLC1_7310105": {
        name: "Kinh tế phát triển - CT chất lượng cao CLC1",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:25.25,hsa: 97.75 },
        note: "..."
      },
        "CLC1_7340201": {
        name: "Ngân hàng - CT chất lượng cao CLC1",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:25.25,hsa: 97.75 },
        note: "..."
      },
        "CLC1_7380201": {
        name: "Công nghệ thông tin và chuyển đổi số - CT chất lượng cao CLC1",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:25.25,hsa: 97.75 },
        note: "..."
      },
        "CLC1_7340204": {
        name: "Bảo hiểm tích hợp chứng chỉ ANZ1IF - CT chất lượng cao CLC1",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:25.25,hsa: 97.75 },
        note: "..."
      },
        "CLC2_7310104": {
        name: "Kinh tế Đầu tư - CT chất lượng cao CLC2",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:26.5,hsa: 105.75 },
        note: "..."
      },
        "CLC2_7340404": {
        name: "Quản trị nhân lực - CT chất lượng cao CLC2",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:26.5,hsa: 105.75 },
        note: "..."
      },
        "CLC2_7340101": {
        name: "Quản trị Kinh doanh - CT chất lượng cao CLC2",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:26.5,hsa: 105.75 },
        note: "..."
      },
        "CLC2_7320108": {
        name: "Quan hệ công chúng - CT chất lượng cao CLC2",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:26.5,hsa: 105.75 },
        note: "..."
      },
        "CLC3_7340201": {
        name: "Tài chính doanh nghiệp - CT chất lượng cao CLC3",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:26.42,hsa: 105.31 },
        note: "..."
      },
        "CLC3_7340115": {
        name: "Digital Marketing (Marketing số) - CT chất lượng cao CLC3",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:26.42,hsa: 105.31 },
        note: "..."
      },
        "CLC3_7340115": {
        name: "Quản trị Marketing - CT chất lượng cao CLC3",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:null,hsa: null },
        note: "..."
      },
        "CLC3_7340120": {
        name: "Quản trị Kinh doanh quốc tế - CT chất lượng cao CLC3",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:26.42,hsa: 105.31 },
        note: "..."
      },
        "CLC3_7310106": {
        name: "Kinh tế quốc tế - CT chất lượng cao CLC3",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:26.42,hsa: 105.31 },
        note: "..."
      },
        "CLC3_7510605": {
        name: "Logistics và Quản lý chuỗi cung ứng - CT chất lượng cao CLC3",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:26.42,hsa: 105.31 },
        note: "..."
      },
        "CLC3_7340112": {
        name: "Thương mại điện tử - CT chất lượng cao CLC3	",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:26.42,hsa: 105.31 },
        note: "..."
      },
        "CLC3_7340302": {
        name: "Kiểm toán tích hợp chứng chỉ ACCA - CT chất lượng cao CLC3",
        combs: ["A00","A01","D01","D07"],
        scores: { combined:26.42,hsa: 105.31 },
        note: "..."
      }
    }
};
