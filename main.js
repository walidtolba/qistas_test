// Questions Data in Arabic - Ethics and Compliance Assessment
const questions = [
    { id: 1, text: "ألتزم بسياسات الشركة وإجراءاتها التشغيلية حتى لو كانت تؤخر إتمام المهام العاجلة." },
    { id: 2, text: "يمكنني تجاوز بعض ضوابط الجودة لضمان تحقيق أهداف المبيعات في الوقت المحدد." },
    { id: 3, text: "أرفض أي هدايا من الموردين قد تؤثر على موضوعيتي في اختيار العروض الأفضل." },
    { id: 4, text: "أتعامل بمرونة مع 'العمولات' التي يقدمها الشركاء كجزء من العرف السائد في السوق." },
    { id: 5, text: "أحرص على تقديم تقارير دورية دقيقة تعكس الإخفاقات والنجاحات بشفافية تامة." },
    { id: 6, text: "أتجنب توثيق بعض الأخطاء التقنية التي وقعت فيها لكي لا يتأثر تقييم أدائي." },
    { id: 7, text: "أحافظ على سرية المعلومات الاستراتيجية والبيانات المالية للشركة كأمانة." },
    { id: 8, text: "أستخدم موارد الشركة التقنية لمشاريع جانبية خاصة بي خارج وقت الدوام." },
    { id: 9, text: "أرفض اتخاذ أي قرار مالي لا يتماشى مع لوائح الصرف المعتمدة في الشركة." },
    { id: 10, text: "أقبل بتجاوز معايير التوظيف إذا كان ذلك يخدم مصلحة الشركة مع جهات نافذة." },
    { id: 11, text: "أبلغ فوراً عن أي محاولة من زميل أو مسؤول للضغط عليّ للتلاعب في التقارير." },
    { id: 12, text: "أستجيب لطلبات رؤسائي بتغيير النتائج المالية لإظهار الشركة بشكل أفضل." },
    { id: 13, text: "أتحمل المسؤولية الكاملة عن قراراتي المهنية حتى لو أدت إلى خسائر مادية." },
    { id: 14, text: "أقدم معلومات 'منتقاة' فقط للمديرين عندما تُطلب مني تفاصيل عن مشروع متعثر." },
    { id: 15, text: "أعتبر أن ترشيد نفقات الشركة وحماية مواردها هو مسؤولية تقع على عاتقي." },
    { id: 16, text: "أتغاضى عن التبليغ عن استغلال زملائي لميزانيات الشركة لأغراض ترفيهية." },
    { id: 17, text: "أطبق معايير الشركة بدقة حتى لو كانت غير مريحة في التنفيذ العملي." },
    { id: 18, text: "أعتقد أن مهاراتي تسمح لي بتجاوز بعض الإجراءات التي يلتزم بها الآخرون." },
    { id: 19, text: "أرفض أي تدخل خارجي (وساطة) يؤثر على قراراتي المهنية مهما كان المصدر." },
    { id: 20, text: "أجد أن مجاملة الأشخاص ذوي النفوذ وسيلة مشروعة للتقدم الوظيفي." },
    { id: 21, text: "أحرص على توثيق جميع الإجراءات التي أقوم بها لضمان المساءلة." },
    { id: 22, text: "من الطبيعي تجميل الحقائق قليلاً في بيئة العمل الصعبة لإرضاء الإدارة العليا." },
    { id: 23, text: "سأقوم بالتبليغ عن أي تلاعب مالي أكتشفه حتى لو كان المبلغ تافهاً." },
    { id: 24, text: "من المقبول الحصول على امتيازات بسيطة من موارد الشركة كتعويض عن ضغط العمل." },
    { id: 25, text: "سأعطي الحق لصاحبه في العمل حتى لو كان ذلك سيغضب شخصاً ذا نفوذ كبير." },
    { id: 26, text: "أعتقد أن الشخص المثالي الذي يلتزم بكل حرف في اللوائح يفتقر للطموح." },
    { id: 27, text: "سأعترف فوراً إذا تسبب قراري في خسارة مالية دون محاولة التبرير." },
    { id: 28, text: "أحياناً أضطر للمبالغة في صعوبة المهمة لأظهر كفاءة أكبر أمام المسؤولين." },
    { id: 29, text: "سأبذل قصارى جهدي في العمل وأحافظ على موارده حتى في غياب الرقابة." },
    { id: 30, text: "الحصول على 'عمولة' مقابل تسهيل عقد تجاري قانوني ليس سلوكاً خاطئاً." }
];

const answerOptions = [
    { label: "أوافق بشدة", value: 5 },
    { label: "أوافق", value: 4 },
    { label: "محايد", value: 3 },
    { label: "أعارض", value: 2 },
    { label: "أعارض بشدة", value: 1 }
];

let currentQuestionIndex = 0;
let userAnswers = [];

// DOM Elements
const screenContainer = document.getElementById('screen');
const startBtn = document.getElementById('start-btn');

// Start Button Listener
if (startBtn) {
    startBtn.addEventListener('click', startTest);
}

function startTest() {
    currentQuestionIndex = 0;
    userAnswers = [];
    renderQuestion(0);
}

function renderQuestion(index) {
    const question = questions[index];
    const progress = ((index) / questions.length) * 100;

    const html = `
        <section class="question-screen">
            <div class="question-header">
                <div class="progress-info" style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.9rem; color: var(--text-secondary);">
                    <span>السؤال ${index + 1} من ${questions.length}</span>
                    <span>${Math.round(progress)}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progress}%"></div>
                </div>
            </div>
            <p class="question-text">${question.text}</p>
            <div class="answers-container">
                ${answerOptions.map((opt, i) => `
                    <button class="answer-btn" onclick="handleAnswer(${opt.value})">
                        ${opt.label}
                    </button>
                `).join('')}
            </div>
        </section>
    `;

    switchScreen(html);
}

window.handleAnswer = (value) => {
    userAnswers.push(value);
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        renderQuestion(currentQuestionIndex);
    } else {
        showLoading();
    }
};

function showLoading() {
    const html = `
        <section class="results-screen">
            <div class="result-loader">
                <div class="spinner"></div>
                <p>جاري تحليل تقييمك المهني...</p>
            </div>
        </section>
    `;
    switchScreen(html);
    
    // API Call
    fetchResult();
}

window.fetchResult = async function() {
    // If we're retrying, show loading again
    if (screenContainer.querySelector('.error-card')) {
        showLoading();
        return;
    }

    try {
        const response = await fetch('https://walidtolba.pythonanywhere.com/answers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                answers: userAnswers
            })
        });

        if (!response.ok) {
            throw new Error('API Error');
        }

        const data = await response.json();
        
        const result = {
            name: data.result_name || data.type || "تم التقييم بنجاح",
            desc: data.result_description || data.description || "شكراً لمشاركتك في هذا التقييم المهني لدراسة النزاهة.",
            isSuccess: true
        };
        
        showResults(result);
    } catch (error) {
        console.error('Fetch error:', error);
        showResults({ 
            name: "عذراً، حدث خطأ في الاتصال", 
            desc: "تعذر إرسال إجاباتك إلى الخادم حالياً. يرجى التحقق من اتصالك بالإنترنت والمحاولة مجدداً.",
            isSuccess: false
        });
    }
}

function showResults(result) {
    const btnLabel = result.isSuccess ? "إعادة التقييم" : "حاول مرة أخرى";
    const btnAction = result.isSuccess ? "location.reload()" : "fetchResult()";
    const cardClass = result.isSuccess ? "result-card" : "error-card";

    const html = `
        <section class="results-screen ${cardClass}">
            <h1 class="logo">QistasHR</h1>
            <h3 style="${result.isSuccess ? '' : 'color: #ef4444;'}">${result.name}</h3>
            <p class="result-desc">${result.desc}</p>
            <button class="primary-btn" onclick="${btnAction}">${btnLabel}</button>
        </section>
    `;
    switchScreen(html);
}

function switchScreen(html) {
    screenContainer.classList.remove('fade-in');
    
    setTimeout(() => {
        screenContainer.innerHTML = html;
        void screenContainer.offsetWidth; 
        screenContainer.classList.add('fade-in');
    }, 500);
}
