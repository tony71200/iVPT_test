const TEXT_TYPE = 0;
const PARA_TYPE = 1
const IMAGE_TYPE = 2;
const AUDIO_TYPE = 3;

let questions_reading = [
    {
        section_title: "TỪ VỰNG VÀ NGỮ PHÁP",
        section_ques: [
            {
                numb: 1,
                question: "Ngày nay, thanh niên Việt Nam có nhiều thói quen xấu ____ dến sức khỏe như thức khuya, hút thuốc, uống rượu.",
                question_type: TEXT_TYPE,
                question_items: null,
                options: [
                    "Ám ảnh",
                    "Ảnh hưởng",
                    "Hưởng thụ",
                    "Hưởng ứng",
                ],
                options_type: TEXT_TYPE,
            },
            {
                numb: 2,
                question: "Tập thể dục và ăn nhiều rau củ quả là một trong những cách phòng chống _____.",
                question_type: TEXT_TYPE,
                question_items: null,
                options: [
                    "Bệnh lý",
                    "Bệnh án",
                    "Bệnh tật",
                    "Bệnh nhân",
                ],
                options_type: TEXT_TYPE,
            },
            {
                numb: 3,
                question: "Bố tôi cực kỳ _____ những món ăn làm từ cá hồi",
                question_type: TEXT_TYPE,
                question_items: null,
                options: [
                    "yêu thương",
                    "yêu quý",
                    "yêu mến",
                    "yêu thích",
                ],
                options_type: TEXT_TYPE,
            },
            {
                numb: 4,
                question: "Cô giáo thông báo ngày mai học sinh được nghỉ học, vì nhà trường tổ chức thi đấu ______.",
                question_type: TEXT_TYPE,
                question_items: null,
                options: [
                    "ca hát",
                    "điền kinh",
                    "Xem phim",
                    "Viết sách",
                ],
                options_type: TEXT_TYPE,
            },
            {
                numb: 5,
                question: "Tôi không thích trời mưa. Vì trời mưa ____ ẩm ướt _____ đi lại bất tiện.",
                question_type: TEXT_TYPE,
                question_items: null,
                options: [
                    "Vừa ... vừa",
                    "Tuy ... nhưng ...",
                    "Cái này ... cái khác ...",
                    "Giá mà ... thì ...",
                ],
                options_type: TEXT_TYPE,
            },
        ],
    },
    {
        section_title: "ĐỌC HIỂU ĐOẠN VĂN",
        section_ques: [
            {
                numb: 1,
                question: "Thành phố Hồ Chí Minh là trung tâm kinh tế lớn nhất của Việt Nam. Thành phố Hồ Chí Minh còn có tên gọi khác là Sài Gòn. Đối lập với phong cách cổ kính, êm đềm của Hà Nội, Sài gòn mang vẻ đẹp của hiện đại với nhiều công trinh mang phong cách kiến trúc Pháp như Nhà thờ Đức Bà, Bưu điện Thành Phố ... Sài gòn có rất nhiều món ăn ngon. Món ăn kiểu Âu hay Á đều có cả. Đặc trưng nhất vẫn là bánh mỳ, hủ hiếu và cà phê. Người Sài gòn ăn uống cũng khá kiểu cách, món nào cũng phải ăn kèm với nước mắm và nhiều rau xanh.",
                question_type: PARA_TYPE,
                question_items: null,
                options: [],
                options_type: null,
            },
            {
                numb: 6,
                question: "Người Sài Gòn ăn uống như thế nào?",
                question_type: TEXT_TYPE,
                question_items: null,
                options: [
                    "Cầu kỳ",
                    "Kỳ lạ",
                    "Đơn giản",
                    "Kỳ quái",
                ],
                options_type: TEXT_TYPE,
            },
            {
                numb: 7,
                question: "Khẩu vị của món ăn Hà Nội là gì?",
                question_type: TEXT_TYPE,
                question_items: null,
                options: [
                    "Ngọt",
                    "Cay",
                    "Chua",
                    "Mặn",
                ],
                options_type: TEXT_TYPE,
            },
            {
                numb: 8,
                question: "Câu nào dưới đây phù hợp với nội dung của đoạn văn trên?",
                question_type: TEXT_TYPE,
                question_items: null,
                options: [
                    "Sài Gòn có bốn mùa như Hà Nội",
                    "Thành phố Hồ Chí Minh là thủ đô của Việt Nam",
                    "Tính cách của người dân Thành phố Hồ Chí Minh rất khép kín",
                    "Vẻ đẹp kiến trúc của Thành phố Hồ Chí Minh mang phong cách Pháp",
                ],
                options_type: TEXT_TYPE,
            },
        ],
    }
];
var answer_reading = {};

let questions_listening = [
    {
        section_title: "NGHE HỘI THOẠI CHỌN ĐÁP ÁN",
        section_type: AUDIO_TYPE,
        section_ques: [
                [
                    {
                        numb: 1,
                        question: '(Từ câu 1 đến 3)',
                        question_type: AUDIO_TYPE,
                        question_items: null,
                    },
                    {
                        numb: 1,
                        question: '',
                        question_type: TEXT_TYPE,
                        question_items: null,
                        options: [
                            'Hôm qua', 'Tháng trước', 'Tuần trước', 'Tuần tới',
                        ],
                        options_type: TEXT_TYPE,
                    },
                    {
                        numb: 2,
                        question: '',
                        question_type: TEXT_TYPE,
                        question_items: null,
                        options: [
                            'Marketing', 'Dân sự', 'Nhân sự', 'Sale',
                        ],
                        options_type: TEXT_TYPE,
                    },
                    {
                        numb: 3,
                        question: '',
                        question_type: TEXT_TYPE,
                        question_items: null,
                        options: [
                            'Bệnh viện', 'Công ty', 'Trường học', 'Ở nhà',
                        ],
                        options_type: TEXT_TYPE,
                    },
                ],
                [
                    {
                        numb: 2,
                        question: '(Từ câu 4 đến 6)',
                        question_type: AUDIO_TYPE,
                        question_items: null,
                    },
                    {
                        numb: 4,
                        question: '',
                        question_type: TEXT_TYPE,
                        question_items: null,
                        options: [
                            'Phức tạp', 'Tốt hơn Sài Gòn', 'Ổn định', 'Rất tốt',
                        ],
                        options_type: TEXT_TYPE,
                    },
                    {
                        numb: 5,
                        question: '',
                        question_type: TEXT_TYPE,
                        question_items: null,
                        options: [
                            'Rất vắng người', 'Không đón khách', 'Hành khách đều có chỗ ngồi', 'Hành khách chen lấn nhau',
                        ],
                        options_type: TEXT_TYPE,
                    },
                    {
                        numb: 6,
                        question: '',
                        question_type: TEXT_TYPE,
                        question_items: null,
                        options: [
                            'Sài Gòn', 'Đà Nẵng', 'Hội An', 'Hà Nội',
                        ],
                        options_type: TEXT_TYPE,
                    },
                ]
        ]
    },
    {
        section_title: "XEM TRANH VÀ CHỌN ĐÁP ÁN",
        section_type: IMAGE_TYPE,
        section_ques: [
                    [{
                        numb: 7,
                        question: '',
                        question_type: IMAGE_TYPE,
                        question_items: "data:image/jpeg;base64,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",
                        options: [
                            'Bắt cá', 'Ngắm biến', 'Đợt người', 'Câu cá',
                        ],
                        options_type: TEXT_TYPE,
                    },],
                    [{
                        numb: 8,
                        question: '',
                        question_type: IMAGE_TYPE,
                        question_items: null,
                        options: [
                            'Một người', 'Hai người', 'Bốn người', 'Năm người',
                        ],
                        options_type: TEXT_TYPE,
                    },],
                    [{
                        numb: 9,
                        question: '',
                        question_type: IMAGE_TYPE,
                        question_items: null,
                        options: [
                            'Cậu bé cầm ô (dù)', 'Cậu bé đội mũ (nón)', 'Cô gái buộc (cột) tóc', 'Người đàn ông đang nói chuyện điện thoại',
                        ],
                        options_type: TEXT_TYPE,
                    },],
        ]
    },
];

var answer_listening = {};

function getJSONdata(){

}