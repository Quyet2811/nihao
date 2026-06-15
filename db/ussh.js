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
    name: "Trường Đại học Khoa học Xã hội và Nhân văn (ĐHQGHN)",
    
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
        "QHX01": {
            name: "Báo chí",
            combs: ["C00", "A01", "D01", "D14", "D15", "D09", "D10", "D11"],
            scores: { combined: { "C00": 27.0, "A01": 25.0, "D01": 24.7, "D14,D15": 25.2, "default": null }, hsa: null },
            note: "Khối C00: 27.0 điểm, Khối A01: 25.0 điểm, Khối D01: 24.7 điểm, Khối D14, D15: 25.2 điểm"
        },
        "QHX02": {
            name: "Chính trị học",
            combs: ["C00", "D01", "D14", "D15", "D09", "D10", "D11"],
            scores: { combined: { "C00": 26.68, "D01": 25.36, "D14,D15": 25.86, "default": null }, hsa: null },
            note: "Khối C00: 26.68 điểm, Khối D01: 25.36 điểm, Khối D14, D15: 25.86 điểm"
        },
        "QHX03": {
            name: "Công tác xã hội",
            combs: ["C00", "A01", "D01", "D14", "D15", "D09", "D10", "D11"],
            scores: { combined: { "C00": 26.99, "D01": 24.49, "D14,D15": 24.99, "default": null }, hsa: null },
            note: "Khối C00: 26.99 điểm, Khối D01: 24.49 điểm, Khối D14, D15: 24.99 điểm"
        },
        "QHX04": {
            name: "Lý luận, lịch sử và phê bình điện ảnh truyền hình",
            combs: ["C00", "D01", "D14", "D15", "D09", "D10", "D11"],
            scores: { combined: { "C00": 27.30, "D01": 24.80, "D14,D15": 25.30, "default": null }, hsa: null },
            note: "Khối C00: 27.30 điểm, Khối D01: 24.80 điểm, Khối D14, D15: 25.30 điểm"
        },
        "QHX05": {
            name: "Đông Nam Á học",
            combs: ["D01", "D14", "D15", "D09", "D10", "D11"],
            scores: { combined: { "D01": 21.75, "D14,D15": 23.25, "default": null }, hsa: null },
            note: "Khối D01: 21.75 điểm, Khối D14, D15: 23.25 điểm"
        },
        "QHX06": {
            name: "Đông phương học",
            combs: ["D01", "D04", "D14", "D15", "D09", "D10", "D11"],
            scores: { combined: { "D01,D04": 24.50, "D14,D15": 25.00, "default": null }, hsa: null },
            note: "Khối D01, D04: 24.50 điểm, Khối D14, D15: 25.00 điểm"
        },
        "QHX07": {
            name: "Hán Nôm",
            combs: ["C00", "D01", "D04", "D14", "D15", "D09", "D10", "D11"],
            scores: { combined: { "C00": 25.76, "D14,D15": 24.76, "default": null }, hsa: null },
            note: "Khối C00: 25.76 điểm, Khối D14, D15: 24.76 điểm"
        },
        "QHX08": {
            name: "Hàn Quốc học",
            combs: ["D01", "DD2", "D14", "D15", "D09", "D10", "D11"],
            scores: { combined: { "D01,DD2": 24.33, "D14,D15": 24.83, "default": null }, hsa: null },
            note: "Khối D01, DD2: 24.33 điểm, Khối D14, D15: 24.83 điểm"
        },
        "QHX09": {
            name: "Khoa học quản lý",
            combs: ["A01", "D01", "D14", "D15", "D09", "D10", "D11"],
            scores: { combined: { "D01": 24.18, "D14,D15": 24.68, "default": null }, hsa: null },
            note: "Khối D01: 24.18 điểm, Khối D14, D15: 24.68 điểm"
        },
        "QHX10": {
            name: "Lịch sử",
            combs: ["C00", "D01", "D14", "D15", "D09", "D10", "D11"],
            scores: { combined: { "C00": 27.30, "D01": 25.80, "D14,D15": 26.30, "default": null }, hsa: null },
            note: "Khối C00: 27.30 điểm, Khối D01: 25.80 điểm, Khối D14, D15: 26.30 điểm"
        },
        "QHX11": {
            name: "Lưu trữ học",
            combs: ["C00", "A01", "D01", "D14", "D15", "D09", "D10", "D11"],
            scores: { combined: { "C00": 26.04, "D01": 24.54, "D14,D15": 25.04, "default": null }, hsa: null },
            note: "Khối C00: 26.04 điểm, Khối D01: 24.54 điểm, Khối D14, D15: 25.04 điểm"
        },
        "QHX12": {
            name: "Ngôn ngữ học",
            combs: ["C00", "A01", "D01", "D14", "D15", "D09", "D10", "D11"],
            scores: { combined: { "C00": 26.75, "D01": 25.25, "D14,D15": 25.75, "default": null }, hsa: null },
            note: "Khối C00: 26.75 điểm, Khối D01: 25.25 điểm, Khối D14, D15: 25.75 điểm"
        },
        "QHX13": {
            name: "Nhân học",
            combs: ["C00", "D01", "D14", "D15", "D09", "D10", "D11"],
            scores: { combined: { "C00": 25.80, "D01": 24.30, "D14,D15": 24.80, "default": null }, hsa: null },
            note: "Khối C00: 25.80 điểm, Khối D01: 24.30 điểm, Khối D14, D15: 24.80 điểm"
        },
        "QHX14": {
            name: "Nhật Bản học",
            combs: ["A01", "D01", "D06", "D14", "D15", "D09", "D10", "D11"],
            scores: { combined: { "D01,D06": 21.75, "default": null }, hsa: null },
            note: "Khối D01, D06: 21.75 điểm"
        },
        "QHX15": {
            name: "Quan hệ công chúng",
            combs: ["A01", "D01", "D14", "D15", "D09", "D10", "D11"],
            scores: { combined: { "D14,D15": 25.95, "default": null }, hsa: null },
            note: "Khối D14, D15: 25.95 điểm"
        },
        "QHX16": {
            name: "Quản lý thông tin",
            combs: ["A01", "D01", "D14", "D15", "D09", "D10", "D11"],
            scores: { combined: { "D14,D15": 24.99, "default": null }, hsa: null },
            note: "Khối D14, D15: 24.99 điểm"
        },
        "QHX17": {
            name: "Quản trị dịch vụ du lịch và lữ hành",
            combs: ["D01", "D14", "D15", "D09", "D10", "D11"],
            scores: { combined: { "D01": 24.37, "D14,D15": 24.87, "default": null }, hsa: null },
            note: "Khối D01: 24.37 điểm, Khối D14, D15: 24.87 điểm"
        },
        "QHX18": {
            name: "Quản trị khách sạn",
            combs: ["D01", "D14", "D15", "D09", "D10", "D11"],
            scores: { combined: { "D01": 23.99, "D14,D15": 24.99, "default": null }, hsa: null },
            note: "Khối D01: 23.99 điểm, Khối D14, D15: 24.99 điểm"
        },
        "QHX19": {
            name: "Quản trị văn phòng",
            combs: ["A01", "D01", "D14", "D15", "D09", "D10", "D11"],
            scores: { combined: { "D01": 24.93, "D14,D15": 25.43, "default": null }, hsa: null },
            note: "Khối D01: 24.93 điểm, Khối D14, D15: 25.43 điểm"
        },
        "QHX20": {
            name: "Quốc tế học",
            combs: ["A01", "D01", "D14", "D15", "D09", "D10", "D11"],
            scores: { combined: { "D01": 23.00, "D14,D15": 23.50, "default": null }, hsa: null },
            note: "Khối D01: 23.00 điểm, Khối D14, D15: 23.50 điểm"
        },
        "QHX21": {
            name: "Tâm lý học",
            combs: ["D01", "D14", "D15", "D09", "D10", "D11"],
            scores: { combined: { "D01": 25.50, "D14,D15": 26.00, "default": null }, hsa: null },
            note: "Khối D01: 25.50 điểm, Khối D14, D15: 26.00 điểm"
        },
        "QHX22": {
            name: "Thông tin - Thư viện",
            combs: ["C00", "A01", "D01", "D14", "D15", "D09", "D10", "D11"],
            scores: { combined: { "C00": 25.41, "D01": 23.91, "D14,D15": 24.41, "default": null }, hsa: null },
            note: "Khối C00: 25.41 điểm, Khối D01: 23.91 điểm, Khối D14, D15: 24.41 điểm"
        },
        "QHX23": {
            name: "Tôn giáo học",
            combs: ["C00", "D01", "D14", "D15", "D09", "D10", "D11"],
            scores: { combined: { "C00": 25.00, "D01": 23.50, "D14,D15": 24.00, "default": null }, hsa: null },
            note: "Khối C00: 25.00 điểm, Khối D01: 23.50 điểm, Khối D14, D15: 24.00 điểm"
        },
        "QHX24": {
            name: "Triết học",
            combs: ["C00", "D01", "D14", "D15", "D09", "D10", "D11"],
            scores: { combined: { "C00": 25.89, "D01": 24.39, "D14,D15": 24.89, "default": null }, hsa: null },
            note: "Khối C00: 25.89 điểm, Khối D01: 24.39 điểm, Khối D14, D15: 24.89 điểm"
        },
        "QHX25": {
            name: "Văn hóa học",
            combs: ["C00", "D01", "D14", "D15", "D09", "D10", "D11"],
            scores: { combined: { "C00": 27.22, "D01": 24.72, "D14,D15": 25.22, "default": null }, hsa: null },
            note: "Khối C00: 27.22 điểm, Khối D01: 24.72 điểm, Khối D14, D15: 25.22 điểm"
        },
        "QHX26": {
            name: "Văn học",
            combs: ["C00", "D01", "D14", "D15", "D09", "D10", "D11"],
            scores: { combined: { "C00": 27.50, "D01": 25.00, "D14,D15": 25.50, "default": null }, hsa: null },
            note: "Khối C00: 27.50 điểm, Khối D01: 25.00 điểm, Khối D14, D15: 25.50 điểm"
        },
        "QHX27": {
            name: "Việt Nam học",
            combs: ["C00", "A01", "D01", "D14", "D15", "D09", "D10", "D11"],
            scores: { combined: { "C00": 26.62, "D01": 24.12, "D14,D15": 24.62, "default": null }, hsa: null },
            note: "Khối C00: 26.62 điểm, Khối D01: 24.12 điểm, Khối D14, D15: 24.62 điểm"
        },
        "QHX28": {
            name: "Xã hội học",
            combs: ["C00", "A01", "D01", "D14", "D15", "D09", "D10", "D11"],
            scores: { combined: { "C00": 27.00, "D01": 24.50, "D14,D15": 25.00, "default": null }, hsa: null },
            note: "Khối C00: 27.00 điểm, Khối D01: 24.50 điểm, Khối D14, D15: 25.00 điểm"
        },
        "QHX29": {
            name: "Truyền thông đa phương tiện (Ngành mới)",
            combs: ["A01", "D01", "D14", "D15", "D09", "D10", "D11"],
            scores: { combined: null, hsa: null },
            note: "Khối mới xét năm 2026"
        }
    }
};
