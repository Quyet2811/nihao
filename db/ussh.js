UNIVERSITY_CERTIFICATES["USSH"] = {
    "IELTS": {
        lang: "m-anh", 
        levels: {
            "5.5": { score: 8.0, text: "IELTS 5.5 ( Quy đổi 8.0đ )" },
            "6.0": { score: 8.5, text: "IELTS 6.0 ( Quy đổi 8.5đ )" },
            "6.5": { score: 9.0, text: "IELTS 6.5 ( Quy đổi 9.0đ )" },
            "7.0": { score: 9.5, text: "IELTS 7.0 ( Quy đổi 9.5đ )" },
            "7.5":{ score: 10.0, text:" IELTS >= 7.5 ( Quy đổi 10đ )" }
        }
    },
    "TOEFL iBT": {
        lang:"m-anh",
        levels: {
            "72-78": { score: 8.0, text: "TOEFL iBT 72-78 ( Quy đổi 8.0đ )" },
            "79-87": { score: 8.5, text: "TOEFL iBT 79-87 ( Quy đổi 8.5đ )" },
            "88-95": { score: 9.0, text: "TOEFL iBT 88-95 ( Quy đổi 9.0đ )" },
            "96-101": { score: 9.5, text: "TOEFL iBT 96-101 ( Quy đổi 9.5đ )" },
            "102-120":{ score: 10.0, text:" TOEFL iBT >=102 ( Quy đổi 10đ )" }
        }
    },
    "HSK và HSKK": {
        lang:"m-trung",
        levels: {
           "HSK 4 (180-220)": { score: 8.0, text: "HSK 4 (180-220) và HSKK Trung cấp ( Quy đổi 8.0đ )" },
            "HSK 4 (221-260)": { score: 8.5, text: "HSK 4 (221-260) và HSKK Trung cấp ( Quy đổi 8.5đ )" },
            "HSK 4 (261-300)": { score: 9.0, text: "HSK 4 (261-300) và HSKK Trung cấp ( Quy đổi 9.0đ )" },
            "HSK 5": { score: 9.5, text: "HSK 5 và HSKK Cao cấp ( Quy đổi 9.5đ )" },
            "HSK 6":{ score: 10.0, text:" HSK 6 và HSKK Cao cấp ( Quy đổi 10đ )" }
        }
    },
    "JLPT": {
        lang:"m-nhat",
        levels: {
           "N3 (95-124)": { score: 8.0, text: "N3 (95-124) ( Quy đổi 8.0đ )" },
            "N3 (125-154)": { score: 8.5, text: "N3 (125-154) ( Quy đổi 8.5đ )" },
            "N3 (155-180)": { score: 9.0, text: "N3 (155-180) ( Quy đổi 9.0đ )" },
            "N2": { score: 9.5, text: "N2 ( Quy đổi 9.5đ )" },
            "N1":{ score: 10.0, text:" N1 ( Quy đổi 10đ )" }
        }
    },
    "TOPIK II": {
        lang:"m-han",
        levels: {
           "Cấp 4 (150-163)": { score: 8.0, text: "Cấp 4 (150-163) ( Quy đổi 8.0đ )" },
            "Cấp 4 (164-176)": { score: 8.5, text: "Cấp 4 (164-176) ( Quy đổi 8.5đ )" },
            "Cấp 4 (177-189)": { score: 9.0, text: "Cấp 4 (177-189) ( Quy đổi 9.0đ )" },
            "Cấp 5": { score: 9.5, text: "Cấp 5 ( Quy đổi 9.5đ )" },
            "Cấp 6":{ score: 10.0, text:"Cấp 6 ( Quy đổi 10đ )" }
        }
    }
};
UNIVERSITY_DATABASE["USSH"] = {
    name: "Đại học Khoa học Xã hội và Nhân văn (ĐHQGHN)",
    
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
      "QHX01(Khối mới)": {
        name: "Báo chí",
        combs: ["A01","D09","D10","D11"],
        scores: { combined:null,hsa: null }
      },
        "QHX01(D01)": {
        name: "Báo chí",
        combs: ["D01"],
        scores: { combined:24.7,hsa: null }
      },
        "QHX01(D14,15)": {
        name: "Báo chí",
        combs: ["D14","D15"],
        scores: { combined:25.2,hsa: null }
      },
      "QHX02(Khối mới)": {
        name: "Chính trị học",
        combs: ["D09","D10","D11"],
        scores: { combined:null,hsa: null }
      },
         "QHX02(C00)": {
        name: "Chính trị học",
        combs: ["C00"],
        scores: { combined:26.68,hsa: null }
      },
         "QHX02(D14,15)": {
        name: "Chính trị học",
        combs: ["D14","D15"],
        scores: { combined:25.86,hsa: null }
      },
         "QHX02(D01)": {
        name: "Chính trị học",
        combs: ["D01"],
        scores: { combined:25.36,hsa: null }
      },
      "QHX03(Khối mới)": {
        name: "Công tác xã hội",
        combs: ["A01","D09","D10","D11"],
        scores: { combined:null,hsa: null }
      },
         "QHX03(C00)": {
        name: "Công tác xã hội",
        combs: ["C00"],
        scores: { combined:26.99,hsa: null }
      },
         "QHX03(D01)": {
        name: "Công tác xã hội",
        combs: ["D01"],
        scores: { combined:24.49,hsa: null }
      },
         "QHX03(D14,15)": {
        name: "Công tác xã hội",
        combs: ["D14","D15"],
        scores: { combined:24.99,hsa: null }
      },
         "QHX04(Khối mới)": {
        name: "Lý luận, lịch sử và phê bình điện ảnh truyền hình ",
        combs: ["D09","D10","D11"],
        scores: { combined:null,hsa: null }
      },
        "QHX04(C00)": {
        name: "Lý luận, lịch sử và phê bình điện ảnh truyền hình ",
        combs: ["C00"],
        scores: { combined:27.3,hsa: null }
      },
        "QHX04(D01)": {
        name: "Lý luận, lịch sử và phê bình điện ảnh truyền hình ",
        combs: ["D01"],
        scores: { combined:24.8,hsa: null }
      },
        "QHX04(D14,15)": {
        name: "Lý luận, lịch sử và phê bình điện ảnh truyền hình ",
        combs: ["D14","D15"],
        scores: { combined:25.3,hsa: null }
      },
         "QHX05(Khối mới)": {
        name: "Đông Nam Á học",
        combs: ["D09","D10","D11"],
        scores: { combined:null,hsa: null }
      },
         "QHX05(D01)": {
        name: "Đông Nam Á học",
        combs: ["D01"],
        scores: { combined:21.75,hsa: null }
      },
         "QHX05(D14,15)": {
        name: "Đông Nam Á học",
        combs: ["D14","D15"],
        scores: { combined:23.25,hsa: null }
      },
         "QHX06(Khối mới)": {
        name: "Đông phương học",
        combs: ["D09","D10","D11"],
        scores: { combined:null,hsa: null }
      },
         "QHX06(D01,D04)": {
        name: "Đông phương học",
        combs: ["D04","D01"],
        scores: { combined:24.5,hsa: null }
      },
         "QHX06(D14,15)": {
        name: "Đông phương học",
        combs: ["D04","D01","D09","D10","D11","D14","D15"],
        scores: { combined:25,hsa: null }
      },
         "QHX07(Khối mới)": {
        name: "Hán Nôm",
        combs: ["D01","D09","D10","D11","D04"],
        scores: { combined:null,hsa: null }
      },
         "QHX07(C00)": {
        name: "Hán Nôm",
        combs: ["C00"],
        scores: { combined:25.76,hsa: null }
      },
         "QHX07(D14,15)": {
        name: "Hán Nôm",
        combs: ["D14","D15"],
        scores: { combined:24.76,hsa: null }
      },
         "QHX08(Khối mới)": {
        name: "Hàn Quốc học",
        combs: ["D09","D10","D11"],
        scores: { combined:null,hsa: null }
      },
        "QHX08(D01,DD2)": {
        name: "Hàn Quốc học",
        combs: ["DD2","D01"],
        scores: { combined:24.33,hsa: null }
      },
        "QHX08(D14,15)": {
        name: "Hàn Quốc học",
        combs: ["D14","D15"],
        scores: { combined:24.83,hsa: null }
      },
         "QHX09(Khối mới)": {
        name: "Khoa học quản lý",
        combs: ["A01","D09","D10","D11"],
        scores: { combined:null,hsa: null }
      },
        "QHX09(D01)": {
        name: "Khoa học quản lý",
        combs: ["D01"],
        scores: { combined:24.18,hsa: null }
      },
        "QHX09(D14,15)": {
        name: "Khoa học quản lý",
        combs: ["D14","D15"],
        scores: { combined:24.68,hsa: null }
      },
        "QHX10(Khối mới)": {
        name: "Lịch sử",
        combs: ["D09","D10","D11"],
        scores: { combined:null,hsa: null }
      },
        "QHX10(C00)": {
        name: "Lịch sử",
        combs: ["C00"],
        scores: { combined:27.30,hsa: null }
      },
          "QHX10(D01)": {
        name: "Lịch sử",
        combs: ["D01"],
        scores: { combined:25.8,hsa: null }
      },
          "QHX10(D14,15)": {
        name: "Lịch sử",
        combs: ["D14","D15"],
        scores: { combined:26.3,hsa: null }
      },
         "QHX11(Khối mới)": {
        name: "Lưu trữ học",
        combs: ["A01","D09","D10","D11"],
        scores: { combined:null,hsa: null }
      },
         "QHX11(C00)": {
        name: "Lưu trữ học",
        combs: ["C00"],
        scores: { combined:26.04,hsa: null }
      },
         "QHX11(D01)": {
        name: "Lưu trữ học",
        combs: ["D01"],
        scores: { combined:24.54,hsa: null }
      },
         "QHX11(D14,15)": {
        name: "Lưu trữ học",
        combs: ["D14","D15"],
        scores: { combined:25.04,hsa: null }
      },
         "QHX12(Khối mới)": {
        name: "Ngôn ngữ học",
        combs: ["A01","D09","D10","D11"],
        scores: { combined:null,hsa: null }
      },
        "QHX12(C00)": {
        name: "Ngôn ngữ học",
        combs: ["C00"],
        scores: { combined:26.75,hsa: null }
      },
        "QHX12(D01)": {
        name: "Ngôn ngữ học",
        combs: ["D01"],
        scores: { combined:25.25,hsa: null }
      },
        "QHX12(D14,15)": {
        name: "Ngôn ngữ học",
        combs: ["D14","D15"],
        scores: { combined:25.75,hsa: null }
      },
      "QHX13(Khối mới)": {
        name: "Nhân học",
        combs: ["C00","D01","D09","D10","D11","D14","D15"],
        scores: { combined:null,hsa: null }
      },
         "QHX13(C00)": {
        name: "Nhân học",
        combs: ["C00"],
        scores: { combined:25.8,hsa: null }
      },
         "QHX13(D01)": {
        name: "Nhân học",
        combs: ["D01"],
        scores: { combined:24.3,hsa: null }
      },
         "QHX13(D14,15)": {
        name: "Nhân học",
        combs: ["D14","D15"],
        scores: { combined:24.8,hsa: null }
      },
         "QHX14(Khối mới)": {
        name: "Nhật Bản học",
        combs: ["A01","D09","D10","D11","D14","D15"],
        scores: { combined:null,hsa: null }
      },
         "QHX14(D01,D06)": {
        name: "Nhật Bản học",
        combs: ["A01","D01","D09","D10","D11","D14","D15","D06"],
        scores: { combined:21.75,hsa: null }
      },
         "QHX15(Khối mới)": {
        name: "Quan hệ công chúng",
        combs: ["A01","D01","D09","D10","D11"],
        scores: { combined:null,hsa: null }
      },
        "QHX15(D14,15)": {
        name: "Quan hệ công chúng",
        combs: ["A01","D01","D09","D10","D11","D14","D15"],
        scores: { combined:25.95,hsa: null }
      },
         "QHX16(Khối mới)": {
        name: "Quản lý thông tin",
        combs: ["A01","D01","D09","D10","D11"],
        scores: { combined:null,hsa: null }
      },
         "QHX16(D14,15)": {
        name: "Quản lý thông tin",
        combs: ["A01","D01","D09","D10","D11","D14","D15"],
        scores: { combined:24.99,hsa: null }
      },
         "QHX17(Khối mới)": {
        name: "Quản trị dịch vụ du lịch và lữ hành",
        combs: ["D09","D10","D11"],
        scores: { combined:null,hsa: null }
      },
         "QHX17(D01)": {
        name: "Quản trị dịch vụ du lịch và lữ hành",
        combs: ["D01"],
        scores: { combined:24.37,hsa: null }
      },
         "QHX17(D14,15)": {
        name: "Quản trị dịch vụ du lịch và lữ hành",
        combs: ["D14","D15"],
        scores: { combined:24.87,hsa: null }
      },
         "QHX18(Khối mới)": {
        name: "Quản trị khách sạn",
        combs: ["D09","D10","D11"],
        scores: { combined:null,hsa: null }
      },
        "QHX18(D01)": {
        name: "Quản trị khách sạn",
        combs: ["D01","D09","D10","D11","D14","D15"],
        scores: { combined:23.99,hsa: null }
      },
        "QHX18(D14,15)": {
        name: "Quản trị khách sạn",
        combs: ["D01","D09","D10","D11","D14","D15"],
        scores: { combined:24.99,hsa: null }
      },
         "QHX19(Khối mới)": {
        name: "Quản trị văn phòng",
        combs: ["A01","D09","D10","D11"],
        scores: { combined:null,hsa: null }
      },
        "QHX19(D01)": {
        name: "Quản trị văn phòng",
        combs: ["A01","D01","D09","D10","D11","D14","D15"],
        scores: { combined:24.93,hsa: null }
      },
        "QHX19(D14,15)": {
        name: "Quản trị văn phòng",
        combs: ["A01","D01","D09","D10","D11","D14","D15"],
        scores: { combined:25.43,hsa: null }
      },
         "QHX20(Khối mới)": {
        name: "Quốc tế học",
        combs: ["A01","D09","D10","D11"],
        scores: { combined:null,hsa: null }
      },
        "QHX20(D01)": {
        name: "Quốc tế học",
        combs: ["D01"],
        scores: { combined:23,hsa: null }
      },
        "QHX20(D14,15)": {
        name: "Quốc tế học",
        combs: ["D14","D15"],
        scores: { combined:23.5,hsa: null }
      },
         "QHX21(Khối mới)": {
        name: "Tâm lý học",
        combs: ["D09","D10","D11"],
        scores: { combined:null,hsa: null }
      },
        "QHX21(D01)": {
        name: "Tâm lý học",
        combs: ["D01"],
        scores: { combined:25.5,hsa: null }
      },
        "QHX21(D14,15)": {
        name: "Tâm lý học",
        combs: ["D14","D15"],
        scores: { combined:26,hsa: null }
      },
         "QHX22(Khối mới)": {
        name: "Thông tin-Thư viện",
        combs: ["A01","D09","D10","D11"],
        scores: { combined:null,hsa: null }
      },
        "QHX22(C00)": {
        name: "Thông tin-Thư viện",
        combs: ["C00"],
        scores: { combined:25.41,hsa: null }
      },
        "QHX22(D01)": {
        name: "Thông tin-Thư viện",
        combs: ["D01"],
        scores: { combined:23.91,hsa: null }
      },
        "QHX22(D14,15)": {
        name: "Thông tin-Thư viện",
        combs: ["D14","D15"],
        scores: { combined:24.41,hsa: null }
      },
         "QHX23(Khối mới)": {
        name: "Tôn giáo học",
        combs: ["D09","D10","D11"],
        scores: { combined:null,hsa: null }
      },
        "QHX23(C00)": {
        name: "Tôn giáo học",
        combs: ["C00"],
        scores: { combined:25,hsa: null }
      },
        "QHX23(D01)": {
        name: "Tôn giáo học",
        combs: ["D01"],
        scores: { combined:23.5,hsa: null }
      },
        "QHX23(D14,15)": {
        name: "Tôn giáo học",
        combs: ["D14","D15"],
        scores: { combined:24,hsa: null }
      },
         "QHX24(Khối mới)": {
        name: "Triết học",
        combs: ["D09","D10","D11"],
        scores: { combined:null,hsa: null }
      },
        "QHX24(C00)": {
        name: "Triết học",
        combs: ["C00"],
        scores: { combined:25.89,hsa: null }
      },
        "QHX24(D01)": {
        name: "Triết học",
        combs: ["D01"],
        scores: { combined:24.39,hsa: null }
      },
        "QHX24(D14,15)": {
        name: "Triết học",
        combs: ["D14","D15"],
        scores: { combined:24.89,hsa: null }
      },
         "QHX25(Khối mới)": {
        name: "Văn hóa học",
        combs: ["D09","D10","D11"],
        scores: { combined:null,hsa: null }
      },
         "QHX25(C00)": {
        name: "Văn hóa học",
        combs: ["C00"],
        scores: { combined:27.22,hsa: null }
      },
         "QHX25(D01)": {
        name: "Văn hóa học",
        combs: ["D01"],
        scores: { combined:24.72,hsa: null }
      },
         "QHX25(D14,15)": {
        name: "Văn hóa học",
        combs: ["D14","D15"],
        scores: { combined:25.22,hsa: null }
      },
        "QHX26(Khối mới)": {
        name: "Văn học",
        combs: ["D09","D10","D11"],
        scores: { combined:null,hsa: null }
      },
        "QHX26(C00)": {
        name: "Văn học",
        combs: ["C00"],
        scores: { combined:27.5,hsa: null }
      },
        "QHX26(D01)": {
        name: "Văn học",
        combs: ["D01"],
        scores: { combined:25,hsa: null }
      },
        "QHX26(D14,15)": {
        name: "Văn học",
        combs: ["D14","D15"],
        scores: { combined:25.5,hsa: null }
      },
         "QHX27(Khối mới)": {
        name: "Việt Nam học",
        combs: ["A01","D09","D10","D11"],
        scores: { combined:null,hsa: null }
      },
        "QHX27(C00)": {
        name: "Việt Nam học",
        combs: ["C00"],
        scores: { combined:26.62,hsa: null }
      },
        "QHX27(D01)": {
        name: "Việt Nam học",
        combs: ["D01"],
        scores: { combined:24.12,hsa: null }
      },
        "QHX27(D14,15)": {
        name: "Việt Nam học",
        combs: ["D14","D15"],
        scores: { combined:24.62,hsa: null }
      },
         "QHX28(Khối mới)": {
        name: "Xã hội học",
        combs: ["A01","D09","D10","D11"],
        scores: { combined:null,hsa: null }
      },
         "QHX28(C00)": {
        name: "Xã hội học",
        combs: ["C00"],
        scores: { combined:27,hsa: null }
      },
         "QHX28(D01)": {
        name: "Xã hội học",
        combs: ["D01"],
        scores: { combined:24.5,hsa: null }
      },
         "QHX28(D14,15)": {
        name: "Xã hội học",
        combs: ["D14","D15"],
        scores: { combined:25,hsa: null }
      },
         "QHX29(Ngành mới)": {
        name: "Truyền thông đa phương tiện",
        combs: ["A01","D01","D09","D10","D11","D14","D15"],
        scores: { combined:null,hsa: null }
      }
    }
};
