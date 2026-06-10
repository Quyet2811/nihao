UNIVERSITY_CERTIFICATES["HNUE"] = {};
UNIVERSITY_DATABASE["HNUE"] = {
    name: "Trường đại học Sư phạm Hà Nội (HNUE)", 
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
     "7140101": {
        name: "Giáo dục học (Bắt đầu tuyển sinh từ 2026)",
        combs: ["C00","D01"],
        mainSubject: "m-van", 
        weight: 2,
        scores: { combined:null,hsa: null }
     },
     "7140114": {
        name: "Quản lí giáo dục",
        combs: ["D01","C03","X01"],
        scores: { combined:24.68,hsa: null }
      },
     "7140202": {
        name: "GD Tiểu học",
        combs: ["D01"],
        scores: { combined:25.1,hsa: null }
      },
     "7140202K": {
        name: "GD Tiểu học - SP Tiếng Anh",
        combs: ["D01"],
        scores: { combined:24.99,hsa: null }
      },
     "7140203": {
        name: "GD đặc biệt",
        combs: ["D01","C00"],
        mainSubject: "m-van", 
        weight: 2,
        scores: { combined:27.55,hsa: null }
      },
     "7140204": {
        name: "GD công dân",
        combs: ["X70","X74,"X78"],
        scores: { combined:27.67,hsa: null }
      },
     "7140205": {
        name: "GD chính trị",
        combs: ["X70","X74,"X78"],
        scores: { combined:28.22,hsa: null }
      },
     "7140208": {
        name: "GD Quốc phòng và An ninh",
        combs: ["C03","C04"],
        scores: { combined:null,hsa: null }
      },
     "7140209": {
        name: "SP Toán học",
        combs: ["A00","A01"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:28.27,hsa: null }
      },
     "7140209K": {
        name: "SP Toán học(dạy Toán bằng tiếng Anh)",
        combs: ["D01","A01"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:28.36,hsa: null }
      },
     "7140210": {
        name: "SP Tin học",
        combs: ["A01","X06"],
        scores: { combined:24.58,hsa: null }
      },
     "7140210K": {
        name: "SP Tin học(dạy Tin học bằng tiếng Anh)",
        combs: ["A01","X06"],
        scores: { combined:24.58,hsa: null }
      },
     "7140211": {
        name: "SP Vật lí",
        combs: ["A00","A01"],
        scores: { combined:28.31,hsa: null }
      },
     "7140211K": {
        name: "SP Vật lí(dạy Vật lí bằng tiếng Anh)",
        combs: ["A00","A01"],
        scores: { combined:27.78,hsa: null }
      },
     "7140212": {
        name: "SP Hoá học",
        combs: ["B00","A00"],
        scores: { combined:28.37,hsa: null }
      },
     "7140212K": {
        name: "SP Hoá học(dạy Hóa học bằng tiếng Anh)",
        combs: ["D07"],
        scores: { combined:26.13,hsa: null }
      },
     "7140213": {
        name: "SP Sinh học",
        combs: ["B00","D08"],
        scores: { combined:26.27,hsa: null }
      },
     "7140217": {
        name: "SP Ngữ văn",
        combs: ["C00","D01"],
        mainSubject: "m-van", 
        weight: 2,
        scores: { combined:28.48,hsa: null }
      },
     "7140218": {
        name: "SP Lịch sử",
        combs: ["C00","D14"],
        scores: { combined:29.06,hsa: null }
      },
     "7140219": {
        name: "SP Địa lí",
        combs: ["C00","C04"],
        scores: { combined:28.79,hsa: null }
      },
     "7140231": {
        name: "SP Tiếng Anh",
        combs: ["D01"],
        scores: { combined:26.29,hsa: null }
      },
     "7140233": {
        name: "SP Tiếng Pháp",
        combs: ["D01","D03"],
        scores: { combined:27.15,hsa: null }
      },
     "7140246": {
        name: "SP Công nghệ",
        combs: ["A00","A01","X07","X08"],
        scores: { combined:21.75,hsa: null }
      },
      "7140247": {
        name: "SP Khoa học tự nhiên",
        combs: ["A00","B00"],
        scores: { combined:27,06,hsa: null }
      },
      "7140249": {
        name: "SP Lịch sử - Địa lí",
        combs: ["C00"],
        scores: { combined:28.58,hsa: null }
      },
      "7220101": {
        name: "Tiếng Việt và văn hóa Việt Nam",
        combs: ["C00","D14"],
        scores: { combined:26.36,hsa: null }
      },
      "00": {
        name: "000",
        combs: ["C03","C04"],
        scores: { combined:null,hsa: null }
      },
      "7220201": {
        name: "Ngôn ngữ Anh",
        combs: ["D01"],
        scores: { combined:24.52,hsa: null }
      },

      "00": {
        name: "000",
        combs: ["C03","C04"],
        scores: { combined:null,hsa: null }
      },
      "7220203": {
        name: "Ngôn ngữ Pháp(Tiếng Pháp ứng dụng và giao tiếp quốc tế)(bắt đầu tuyển sinh từ 2026)",
        combs: ["D03","D01"],
        scores: { combined:null,hsa: null }
      },
      "7220204": {
        name: "Ngôn ngữ Trung Quốc",
        combs: ["D01","D04"],
        scores: { combined:26.76,hsa: null }
      },
      "7229001": {
        name: "Triết học(Triết học Mác Lê-nin)",
        combs: ["C00","D14","X70"],
        scores: { combined:24.68,hsa: null }
      },
      "7229010": {
        name: "Lịch sử",
        combs: ["C00","C03","D14"],
        scores: { combined:27.75,hsa: null }
      },
      "7229030": {
        name: "Văn học",
        combs: ["C00","D01"],
        mainSubject: "m-van", 
        weight: 2,
        scores: { combined:27.64,hsa: null }
      },
      "7310201": {
        name: "Chính trị học",
        combs: ["X70","X74","X78"],
        scores: { combined:25.1,hsa: null }
      },
      "7310301": {
        name: "Xã hội học",
        combs: ["C00","D14","X70"],
        scores: { combined:25.8,hsa: null }
      },
      "7310401": {
        name: "Tâm lý học(Tâm lý học trường học)",
        combs: ["C00","D01"],
        mainSubject: "m-van", 
        weight: 2,
        scores: { combined:23.23,hsa: null }
      },
      "7310403": {
        name: "Tâm lý học giáo dục",
        combs: ["C00","D01"],
        mainSubject: "m-van", 
        weight: 2,
        scores: { combined:23.75,hsa: null }
      },
     "7310501": {
        name: "Địa lí học(Địa lí tài nguyên và môi trường)(bắt đầu tuyển sinh từ 2026)",
        combs: ["C00","C04","X74"],
        scores: { combined:null,hsa: null }
      },
     "7310601": {
        name: "Quốc tế học(bắt đầu tuyển sinh từ 2026)",
        combs: ["C00","C03","D14"],
        scores: { combined:null,hsa: null }
      },
     "7310630": {
        name: "Việt Nam học",
        combs: ["C00","X70","D14"],
        scores: { combined:20,hsa: null }
      },
     "7420101": {
        name: "Sinh học",
        combs: ["B00","B02","B08","X16"],
        scores: { combined:19,hsa: null }
      },
     "7420201": {
        name: "Công nghệ sinh học",
        combs: ["B00","B02","B08","X16"],
        scores: { combined:19.25,hsa: null }
      },
     "7440102": {
        name: "Vật lí học(Vật lí bán dẫn và kỹ thuật)",
        combs: ["A00","A01","X06"],
        scores: { combined:22.35,hsa: null }
      },
     "7440112": {
        name: "Hóa học",
        combs: ["A00","B00","D07"],
        scores: { combined:23,hsa: null }
      },
      "7440112D": {
        name: "Hóa học(Hóa dược)(bắt đầu tuyển sinh từ 2026)",
        combs: ["A00","B00","D07"],
        scores: { combined:null,hsa: null }
      },
      "7460101": {
        name: "Toán học",
        combs: ["A00","A01"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:25.5,hsa: null }
      },
      "7460108": {
        name: "Khoa học dữ liệu(bắt đầu tuyển sinh từ 2026)",
        combs: ["A00","A01"],
        mainSubject: "m-toan", 
        weight: 2,
        scores: { combined:null,hsa: null }
      },
      "7480107": {
        name: "Trí tuệ nhân tạo(bắt đầu tuyển sinh từ 2026)",
        combs: ["A01","X06"],
        scores: { combined:null,hsa: null }
      },
      "7480201": {
        name: "Công nghệ thông tin",
        combs:  ["A01","X06"],
        scores: { combined:20.6,hsa: null }
      },
      "7760101": {
        name: "Công tác xã hội",
        combs: ["C00","D14","X70"],
        scores: { combined:26.04,hsa: null }
      },
      "7760103": {
        name: "Hỗ trợ giáo dục người khuyết tật",
        combs: ["C00","D01"],
        mainSubject: "m-van", 
        weight: 2,
        scores: { combined:25.28,hsa: null }
      },
     "7810103": {
        name: "Quản trị dịch vụ du lịch và lữ hành",
        combs: ["C00","D14","X70"],
        scores: { combined:20.25,hsa: null }
      }
   }
};
