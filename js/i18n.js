// 国际化翻译配置
const translations = {
    zh: {
        header: {
            firmName: '美国信律恒达律师事务所'
        },
        nav: {
            about: '关于我们',
            services: '知识产权和跨境电商',
            appointment: '移民',
            contact: '联系我们'
        },
        about: {
            title: '关于我们',
            firmName: '恒达律师事务所',
            paragraph1: '恒达律师事务所（Hengda Law Firm）总部位于纽约，是一家专注于美国移民法与跨境商业合规及争议解决的精品律师事务所，长期服务中国与美国客户，深耕跨境电商、科技与创作者型业务。我们以法律标准与证据体系为核心，代理 EB-1A、NIW、O-1、L-1、EB-5 等高端职业与投资类移民事务，并为企业客户提供公司架构与交易文件（LLC / Corporation）、平台合规、知识产权保护，以及 Schedule A / TRO、CPSC 产品安全合规与调查、Amazon APEX 等关键风险事项的策略应对。',
            paragraph2: '本所律师持有纽约州与新泽西州律师执业资格，并具备在纽约南区联邦地区法院（S.D.N.Y.）、纽约东区联邦地区法院（E.D.N.Y.）、伊利诺伊州北区联邦地区法院（N.D. Ill.）及伊利诺伊州南区联邦地区法院（S.D. Ill.）的出庭资格。',
            paragraph3: '',
            value1: '专业',
            value2: '专注',
            value3: '高效',
            value4: '信赖'
        },
        services: {
            title: '知识产权和跨境电商',
            corporate: '企业法务与交易支持',
            corporateDesc: '我们为跨境电商、科技公司与创作者业务提供从设立到扩张的全周期法律支持，涵盖 LLC 与 Corporation 的设立与重组、股权与治理结构设计、合伙人/股东机制与控制权安排，以及核心商业合同与合作框架的起草、审阅与谈判，并通过体系化文件与流程设计，将法律从"事后救火"转化为可复用的增长底层能力。',
            ecommerce: '电商与线上业务合规',
            ecommerceDesc: '面向平台型经营与在线交易，我们围绕供应链、履约、退款与售后、数据与隐私等高频风险点建立可执行的合规框架，覆盖采购/代发与履约协议、销售条款与 PO 条款、以及网站 Terms/Privacy 等核心线上文件，确保业务在规模化增长时依然保持规则适配与风险可控。',
            schedulea: 'Schedule A 诉讼与 TRO 应诉',
            scheduleaDesc: '针对跨境电商常见的 Schedule A 批量诉讼及 TRO/资产冻结，我们以"快速止损、恢复资金流、保持运营"为目标，第一时间评估风险与证据，制定撤销/修改救济与应诉路径，主导与对方律师的谈判与和解结构，并同步提供合规与产品/页面整改建议，最大限度降低业务中断与复发风险。',
            cpsc: 'CPSC 产品安全合规与调查应对',
            cpscDesc: '面向进入美国市场的消费品与硬件产品，我们提供 CPSC 风险预审与合规落地支持，包括标签、说明书与警示信息评估、合规文件体系搭建，以及在调查、投诉、抽检与召回等情形下的官方沟通与应对方案设计，帮助品牌在增长与合规之间建立长期可持续的安全边界。',
            apex: '亚马逊专利评估（APEX）程序应对',
            apexDesc: '在 APEX 程序中，时间窗口与技术判断决定成本与结果，我们通过专利—产品技术比对形成风险意见，并结合你的商业目标选择最优路径（参与 APEX、产品调整、谈判和解或其他策略），同时把短期应对与后续产品迭代、专利布局与竞争策略衔接，避免"解决一次、再来一次"。',
            iplitigation: '知识产权侵权诉讼（商标 / 版权 / 专利）',
            iplitigationDesc: '我们在美国联邦及州法院代理各类知识产权侵权案件，围绕权利基础与证据体系构建诉讼策略，推进禁令救济与损害赔偿主张，并结合平台与渠道的现实机制制定可执行的控制方案，确保维权动作与商业结果一致、节奏可控。',
            ipstrategy: '知识产权布局与品牌资产规划',
            ipstrategyDesc: '我们协助跨境品牌与创作者将"内容、设计与技术"转化为可防御、可授权、可交易的资产，通过多国商标与专利组合策略、创作成果的版权与合同安排，以及品牌备案与合作交易中的知识产权条款设计，为全球化增长建立清晰且可持续的权利边界。'
        },
        appointment: {
            title: '预约律师咨询',
            heading: '免费案件评估',
            description: '请填写以下信息，我们的律师团队将在24小时内与您联系，为您提供免费的案件初步评估和法律咨询建议。',
            name: '姓名',
            phone: '联系电话',
            email: '电子邮箱',
            caseType: '案件类型',
            selectCase: '请选择案件类型',
            message: '案件简述',
            messagePlaceholder: '请简要描述您的法律问题或案件情况...',
            submit: '提交预约申请',
            other: '其他'
        },
        footer: {
            title: '联系我们',
            availability: '24/7',
            subtitle: '如果您有任何法律需求，请随时与我们联系',
            firmName: '美国信律恒达律师事务所',
            phone: '电话',
            address: '地址',
            email: '邮箱',
            wechat: '微信',
            officeHours: '办公时间',
            officeHoursContent: '周一至周六 9:00 AM - 5:30 PM<br>周日（仅限预约）',
            wechatQRCode: '微信二维码',
            mapTitle: '办公地点'
        },
        joinus: {
            title: '加入我们',
            positions: '招聘职位：Law Clerk（法律助理）',
            jobDuties: '工作内容：',
            duty1: '协助律师进行法律检索与材料整理',
            duty2: '起草、整理和校对法律文件',
            duty3: '协助准备法院或移民申请材料',
            duty4: '管理案件档案，与客户或机构沟通',
            duty5: '完成律师交办的其他工作',
            requirements: '岗位要求：',
            requirement1: '毕业于美国法学院（JD优先）',
            requirement2: '中英文读写良好，能够处理双语文件',
            requirement3: '工作认真、细心、有责任感',
            requirement4: '有律所或相关经验',
            workArrangement: '工作安排：',
            location: '工作地点：纽约曼哈顿',
            applicationMethod: '申请方式：',
            applicationInfo: '请将简历发送至：info@hengdalawfirm.com',
            emailSubject: '邮件标题注明："Law Clerk – 姓名"'
        }
    },
    en: {
        header: {
            firmName: 'Heng Da Law Firm'
        },
        nav: {
            about: 'About Us',
            services: 'IP & Cross-border E-commerce',
            appointment: 'Immigration',
            contact: 'Contact Us'
        },
        about: {
            title: 'About Us',
            firmName: 'Hengda Law Firm',
            paragraph1: 'Hengda Law Firm is a New York–based boutique focused on U.S. immigration and cross-border commercial compliance and disputes, serving clients across the United States and China, with particular depth in e-commerce, technology, and creator-led businesses. We advise on sophisticated employment- and investment-based immigration matters—EB-1A, NIW, O-1, L-1, and EB-5—through disciplined, evidence-driven advocacy and structured legal briefing. We also counsel businesses on entity structuring and core commercial documentation (LLC/corporation formation), platform compliance, intellectual property protection, and targeted risk response for Schedule A/TRO matters, CPSC product safety compliance and investigations, and Amazon APEX proceedings.',
            paragraph2: 'Our attorneys are admitted to practice in New York and New Jersey and hold court admissions in the U.S. District Court for the Southern District of New York (S.D.N.Y.), the Eastern District of New York (E.D.N.Y.), the Northern District of Illinois (N.D. Ill.), and the Southern District of Illinois (S.D. Ill.).',
            paragraph3: '',
            value1: '',
            value2: 'Dedicated Approach.',
            value3: 'Efficient Results.',
            value4: 'Trusted by Clients.'
        },
        services: {
            title: 'IP & Cross-border E-commerce',
            corporate: 'Corporate & Transactional Counsel',
            corporateDesc: 'We advise cross-border e-commerce businesses, technology companies, and creator-led ventures through every stage of growth, including LLC and corporation formation and restructuring. Our work focuses on governance structures, equity and control arrangements among founders and stakeholders, and the drafting and negotiation of core commercial agreements—building repeatable legal infrastructure that supports scalable growth and disciplined risk management.',
            ecommerce: 'E-Commerce & Online Business Compliance',
            ecommerceDesc: 'We help platform-based and online businesses establish practical compliance frameworks aligned with their operational realities. Our services cover supply chain and fulfillment arrangements, sales and purchase order terms, and essential website documentation, including terms of use and privacy policies, ensuring that growth across platforms and markets remains legally sustainable.',
            schedulea: 'Schedule A Litigation & TRO Defense',
            scheduleaDesc: 'We represent cross-border sellers in Schedule A mass litigation and TRO-related asset freezes, prioritizing rapid risk assessment, preservation of cash flow, and business continuity. Our approach includes developing response strategies to dissolve or modify injunctive relief, leading negotiations with opposing counsel, and implementing compliance and listing-level adjustments to reduce recurrence.',
            cpsc: 'CPSC Product Safety Compliance & Investigations',
            cpscDesc: 'For consumer products entering the U.S. market, we advise on compliance with Consumer Product Safety Commission (CPSC) regulations, including pre-market risk assessments, labeling and instruction review, and compliance documentation. We also represent clients in CPSC investigations, recalls, and agency communications, helping brands manage regulatory exposure while protecting long-term market access.',
            apex: 'Amazon Patent Evaluation Express (APEX) Proceedings',
            apexDesc: 'In Amazon\'s APEX program, timing and technical analysis are critical. We conduct patent-to-product comparisons, provide risk assessments, and guide clients through strategic decision-making, including participation in APEX, product modifications, negotiated resolutions, and longer-term patent positioning aligned with product development and competition strategy.',
            iplitigation: 'Intellectual Property Litigation (Trademark, Copyright & Patent)',
            iplitigationDesc: 'We represent clients in intellectual property disputes in U.S. federal and state courts, handling trademark, copyright, and patent infringement matters. Our work includes developing enforceable rights and evidentiary records, pursuing injunctive relief and damages, and leveraging platform and channel mechanisms to achieve commercially meaningful outcomes.',
            ipstrategy: 'Intellectual Property Strategy & Brand Asset Planning',
            ipstrategyDesc: 'We advise cross-border brands and creators on building defensible and monetizable IP portfolios through coordinated trademark and patent strategies across jurisdictions. Our work also includes contractual protection of creative assets, brand registry and licensing arrangements, and IP provisions in commercial transactions, transforming creative and technical output into durable business assets.'
        },
        appointment: {
            title: 'Book a Free Attorney Consultation',
            heading: 'Free Case Evaluation',
            description: 'Please fill out the information below, and our legal team will contact you within 24 hours to provide a free preliminary case assessment and legal consultation.',
            name: 'Name',
            phone: 'Phone',
            email: 'Email',
            caseType: 'Case Type',
            selectCase: 'Please select case type',
            message: 'Case Description',
            messagePlaceholder: 'Please briefly describe your legal issue or case...',
            submit: 'Submit Appointment',
            other: 'Other'
        },
        footer: {
            title: 'Contact Us',
            availability: '24/7',
            subtitle: 'If you require any legal assistance, please do not hesitate to contact us.',
            firmName: 'Heng Da Law Firm',
            phone: 'Phone',
            address: 'Address',
            email: 'Email',
            wechat: 'WeChat',
            officeHours: 'Office Hours',
            officeHoursContent: 'Monday - Saturday: 9:00 AM - 5:30 PM<br>Sunday: By Appointment Only',
            wechatQRCode: 'WeChat QR Code',
            mapTitle: 'Office Location'
        },
        joinus: {
            title: 'Join Us',
            positions: 'Position: Law Clerk',
            jobDuties: 'Job Responsibilities:',
            duty1: 'Conduct legal research and assist with document review',
            duty2: 'Draft, organize, and proofread legal documents',
            duty3: 'Assist with preparation and filing of court or immigration applications',
            duty4: 'Maintain case files and communicate with clients or agencies',
            duty5: 'Perform other tasks assigned by supervising attorneys',
            requirements: 'Requirements:',
            requirement1: 'Graduate of a U.S. law school (J.D. preferred)',
            requirement2: 'Strong English and Chinese reading/writing skills; able to work with bilingual documents',
            requirement3: 'Detail-oriented, responsible, and organized',
            requirement4: 'Prior law firm or relevant experience preferred',
            workArrangement: 'Work Arrangement:',
            location: 'Location: Manhattan, New York',
            applicationMethod: 'How to Apply:',
            applicationInfo: 'Please send your resume to info@hengdalawfirm.com',
            emailSubject: 'Email subject line: "Law Clerk – [Your Name]"'
        }
    }
};

// 获取当前语言（始终从localStorage读取最新值）
function getCurrentLang() {
    return localStorage.getItem('language') || 'zh';
}

// 获取翻译文本
function t(key) {
    const currentLang = getCurrentLang();
    const keys = key.split('.');
    let value = translations[currentLang];

    for (const k of keys) {
        value = value[k];
        if (!value) return key;
    }

    return value;
}

// 切换语言
function switchLanguage(lang) {
    if (lang && (lang === 'zh' || lang === 'en')) {
        localStorage.setItem('language', lang);
        updatePageLanguage();
    }
}

// 更新页面语言
function updatePageLanguage() {
    const currentLang = getCurrentLang();

    // 更新所有带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = t(key);
    });

    // 更新HTML内容（支持<br>等标签）
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
        const key = element.getAttribute('data-i18n-html');
        element.innerHTML = t(key);
    });

    // 更新placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = t(key);
    });

    // 更新语言选择器状态
    const langZh = document.getElementById('lang-zh');
    const langEn = document.getElementById('lang-en');
    if (langZh && langEn) {
        if (currentLang === 'zh') {
            langZh.classList.add('active');
            langEn.classList.remove('active');
        } else {
            langZh.classList.remove('active');
            langEn.classList.add('active');
        }
    }

    // 触发自定义事件，让其他模块知道语言已切换
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: currentLang } }));
}

// 页面加载时初始化语言
document.addEventListener('DOMContentLoaded', function() {
    updatePageLanguage();

    // 监听DOM变化，当新内容加载时自动应用语言
    let updateTimeout;
    const observer = new MutationObserver(function(mutations) {
        // 使用防抖避免频繁更新
        clearTimeout(updateTimeout);
        updateTimeout = setTimeout(function() {
            const hasNewContent = mutations.some(mutation =>
                mutation.addedNodes.length > 0 &&
                Array.from(mutation.addedNodes).some(node =>
                    node.nodeType === 1 && // 只处理元素节点
                    (node.querySelector('[data-i18n]') || node.hasAttribute('data-i18n'))
                )
            );
            if (hasNewContent) {
                updatePageLanguage();
            }
        }, 100);
    });

    // 监听整个body的变化
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});

// 导出到全局
window.t = t;
window.switchLanguage = switchLanguage;
window.getCurrentLang = getCurrentLang;
