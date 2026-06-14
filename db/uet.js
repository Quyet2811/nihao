UNIVERSITY_CERTIFICATES["UET"] = {
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
UNIVERSITY_DATABASE["UET"] = {
    name: "Trường Đại học Công nghệ (ĐHQGHN)",
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
        "CN02": {
        name: "Kỹ thuật máy tính",
        combs: ["A00","A01","X06"],
        scores: { combined:27,hsa: null }
      },
        "CN03": {
        name: "Vật lý kỹ thuật",
        combs: ["A00","A01","X06"],
        scores: { combined:25.2,hsa: null }
      },
        "CN04": {
        name: "Cơ kỹ thuật",
        combs: ["A00","A01","X06"],
        scores: { combined:26.15,hsa: null }
      },
        "CN05": {
        name: "Công nghệ kỹ thuật xây dựng",
        combs: ["A00","A01","X06"],
        scores: { combined:22.25,hsa: null }
      },
        "CN06": {
        name: "Công nghệ kỹ thuật cơ - điện tử",
        combs: ["A00","A01","X06"],
        scores: { combined:26.73,hsa: null }
      },
        "CN07": {
        name: "Công nghệ hàng không vũ trụ",
        combs: ["A00","A01","X06"],
        scores: { combined:23.96,hsa: null }
      },
        "CN08": {
        name: "Khoa học máy tính",
        combs: ["A00","A01","X06"],
        scores: { combined:27.86,hsa: null }
      },
        "CN09": {
        name: "Công nghệ kỹ thuật điện tử – viễn thông",
        combs: ["A00","A01","X06"],
        scores: { combined:26.63,hsa: null }
      },
        "CN10": {
        name: "Công nghệ nông nghiệp",
        combs: ["A00","A01","X06","A02"],
        scores: { combined:22,hsa: null }
      },
        "CN11": {
        name: "Kỹ thuật điều khiển và tự động hoá",
        combs: ["A00","A01","X06"],
        scores: { combined:27.9,hsa: null }
      },
        "CN12": {
        name: "Trí tuệ nhân tạo",
        combs: ["A00","A01","X06"],
        scores: { combined:27.75,hsa: null }
      },
        "CN13": {
        name: "Kỹ thuật năng lượng",
        combs: ["A00","A01","X06"],
        scores: { combined:24.87,hsa: null }
      },
        "CN14": {
        name: "Hệ thống thông tin",
        combs: ["A00","A01","X06"],
        scores: { combined:26.38,hsa: null }
      },
        "CN15": {
        name: "Mạng máy tính và truyền thông dữ liệu",
        combs: ["A00","A01","X06"],
        scores: { combined:26.73,hsa: null }
      },
        "CN17": {
        name: "Kỹ thuật Robot* ",
        combs: ["A00","A01","X06"],
        scores: { combined:26,hsa: null }
      },
        "CN18": {
        name: "Thiết kế công nghiệp và Đồ họa",
        combs: ["A00","A01","X06"],
        scores: { combined:24.2,hsa: null }
      },
        "CN19": {
        name: "Công nghệ vật liệu (Chương trình Công nghệ vật liệu và Vi điện tử) ",
        combs: ["A00","A01","X06"],
        scores: { combined:25.6,hsa: null }
      },
        "CN20": {
        name: "Khoa học dữ liệu (Chương trình Khoa học và Kỹ thuật dữ liệu)",
        combs: ["A00","A01","X06"],
        scores: { combined:27.38,hsa: null }
      },
        "CN21": {
        name: "Công nghệ sinh học (Chương trình Công nghệ kỹ thuật sinh học) ",
        combs: ["A00","A01","X06","A02"],
        scores: { combined:22.13,hsa: null }
      }
    }
};
