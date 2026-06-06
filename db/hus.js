// CẤU HÌNH ĐIỂM CHỨNG CHỈ NGOẠI NGỮ CHO HUS
// Bao gồm cả điểm thay thế (score) và điểm cộng thêm (bonus)
UNIVERSITY_CERTIFICATES["HUS"] = {
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
}

// CẤU HÌNH THÔNG TIN VÀ CÔNG THỨC XÉT TUYỂN CỦA HUS
UNIVERSITY_DATABASE["HUS"] = {
    name: "Đại học Khoa học Tự nhiên (ĐHQGHN)",
    
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
      "QHT01": {
        name: "Toán học",
        combs: ["A00","A01","C01","D07","D08","X26"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:25.9,hsa: null }
      },
      "QHT02": {
        name: "Toán tin",
        combs: ["A00","A01","C01","D07","D08","X26"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:25.5,hsa: null }
      },
      "QHT98": {
        name: "Khoa học máy tính và thông tin",
        combs: ["A00","A01","C01","D07","D08","X26"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:25.35,hsa: null }
      },
      "QHT93": {
        name: "Khoa học dữ liệu",
        combs: ["A00","A01","C01","D07","D08","X26"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:26.0,hsa: null }
      },
      "QHT03": {
        name: " Vật lý học",
        combs: ["A00","A01","A02","B00","C01","C02","D07","X06"],
        scores: { combined:24.65,hsa:null } 
      },
      "QHT04": {
        name: " Khoa học vật liệu",
        combs: ["A00","A01","A02","B00","C01","C02","D07","X06"],
        scores: { combined:24.2,hsa:null } 
      },
      "QHT05": {
        name: " Công nghệ kỹ thuật hạt nhân",
        combs: ["A00","A01","A02","B00","C01","C02","D07","X06"],
        scores: { combined:23.5,hsa:null } 
      },
      "QHT99": {
        name: " Công nghệ bán dẫn",
        combs: ["A00","A01","A02","B00","C01","C02","D07","X06"],
        scores: { combined:25.55,hsa:null } 
      },
      "QHT94": {
        name: " Kỹ thuật điện tử và tin học",
        combs: ["A00","A01","A02","B00","C01","C02","D07","X06"],
        scores: { combined:24.57,hsa:null } 
      },
      "QHT06": {
        name: " Hóa học",
        combs: ["A00","A05","A06","B00","C02","D07"],
        scores: { combined:23.9,hsa:null } 
      },
       "QHT07": {
        name: " Công nghệ kỹ thuật hóa học",
        combs: ["A00","A05","A06","B00","C02","D07"],
        scores: { combined:23.45,hsa:null } 
      },
       "QHT43": {
        name: " Hóa dược",
        combs: ["A00","A05","A06","B00","C02","D07"],
        scores: { combined:23.7,hsa:null } 
      },
       "QHT08": {
        name: " Sinh học",
        combs: ["A00","A02","B03","B00","B08","D07"],
        scores: { combined:20.05,hsa:null } 
      },
       "QHT09": {
        name: " Công nghệ sinh học",
        combs: ["A00","A02","B03","B00","B08","D07"],
        scores: { combined:23.05,hsa:null } 
      },
      "QHT81": {
        name: " Sinh dược học",
        combs: ["A00","A02","B03","B00","B08","D07"],
        scores: { combined:20.1,hsa:null } 
      },
       "QHT10": {
        name: " Địa lý tự nhiên",
        combs: ["A00","A01","A04","A06","A07","B02","B00","B08","C04","D01","D10","D20","X01","X21","X25"],
        scores: { combined: 23.95,hsa:null } 
      },
      "QHT91": {
        name: " Khoa học thông tin địa không gian",
        combs: ["A00","A01","A04","A06","A07","B02","B00","B08","C04","D01","D10","D20","X01","X21","X25"],
        scores: { combined: 23.5,hsa:null } 
      },
      "QHT12": {
        name: " Quản lý đất đai",
        combs: ["A00","A01","A04","A06","A07","B02","B00","B08","C04","D01","D10","D20","X01","X21","X25"],
        scores: { combined: 22.27 ,hsa:null } 
      },
      "QHT95": {
        name: " Quản lý phát triển đô thị và bất động sản",
        combs: ["A00","A01","A04","A06","A07","B02","B00","B08","C04","D01","D10","D20","X01","X21","X25"],
        scores: { combined: 22.9,hsa:null } 
      },
      "QHT13": {
        name: " Khoa học môi trường",
        combs: ["A00","A02","A11","B03","B00","C01","C02","C03","C04","D01","D07","D08","X01","X02"],
        scores: { combined:21.25,hsa:null } 
      },
       "QHT15": {
        name: " Công nghệ kỹ thuật môi trường",
        combs: ["A00","A02","A11","B03","B00","C01","C02","C03","C04","D01","D07","D08","X01","X02"],
        scores: { combined:21.55,hsa:null } 
      },
        "QHT96": {
        name: " Khoa học và công nghệ thực phẩm",
        combs: ["A00","A02","A11","B03","B00","C01","C02","C03","C04","D01","D07","D08","X01","X02"],
        scores: { combined:22.8,hsa:null } 
      },
        "QHT82": {
        name: " Môi trường, sức khỏe và an toàn",
        combs: ["A00","A02","A11","B03","B00","C01","C02","C03","C04","D01","D07","D08","X01","X02"],
        scores: { combined:21.2,hsa:null } 
      },
        "QHT16": {
        name: " Khí tượng và khí hậu học",
        combs: ["A00","A02","A01","B03","B00","C01","C02","C04","D01","D07","X02","X26"],
        scores: { combined:22.8,hsa:null } 
      },
       "QHT17": {
        name: " Hải dương học",
        combs: ["A00","A02","A01","B03","B00","C01","C02","C04","D01","D07","X02","X26"],
        scores: { combined:21.5,hsa:null } 
      },
       "QHT92": {
        name: " Tài nguyên và môi trường nước",
        combs: ["A00","A02","A01","B03","B00","C01","C02","C04","D01","D07","X02","X26"],
        scores: { combined:21.1,hsa:null } 
      },
       "QHT18": {
        name: " Địa chất học",
        combs: ["A00","A04","A01","A07","B03","C01","C02","C03","C04","D01","D10","X01","X21","X25"],
        scores: { combined:22.05,hsa:null } 
      },
      "QHT20": {
        name: " Quản lý tài nguyên và môi trường",
        combs: ["A00","A04","A01","A07","B03","C01","C02","C03","C04","D01","D10","X01","X21","X25"],
        scores: { combined:22.2,hsa:null } 
      }
    }
};
