// Questions Data in Arabic - Ethics and Compliance Assessment
const questions = [
    { id: 1, text: "ألتزم بسياسات الشركة حتى لو أدى ذلك إلى تأخير بعض المهام العاجلة" },
    { id: 2, text: "أستطيع تجاوز بعض معايير الجودة لإنهاء المبيعات في الوقت المطلوب" },
    { id: 3, text: "أرفض الهدايا من الموردين إذا كانت قد تؤثر على قراراتي" },
    { id: 4, text: "أتقبل العمولات التي يدفعها الشركاء إذا كانت عادة شائعة في السوق" },
    { id: 5, text: "أقدم تقارير صادقة وشفافة تظهر الأخطاء والنجاحات بوضوح" },
    { id: 6, text: "أتجنب تسجيل بعض الأخطاء حتى لا يتأثر تقييمي" },
    { id: 7, text: "أحافظ على سرية المعلومات المهمة والبيانات المالية للشركة" },
    { id: 8, text: "أستخدم أجهزة أو موارد الشركة لأعمالي الخاصة خارج ساعات العمل" },
    { id: 9, text: "أرفض أي قرار مالي يخالف قواعد الصرف في الشركة" },
    { id: 10, text: "أقبل تجاوز شروط التوظيف إذا كان ذلك يفيد الشركة مع أشخاص ذوي نفوذ" },
    { id: 11, text: "أبلغ فوراً إذا حاول أحد زملائي أو رؤسائي الضغط عليّ لتغيير التقارير" },
    { id: 12, text: "أوافق على طلب رؤسائي بتعديل النتائج المالية لتحسين صورة الشركة" },
    { id: 13, text: "أتحمل المسؤولية الكاملة عن قراراتي حتى لو تسببت في خسائر" },
    { id: 14, text: "أعطي المديرين فقط المعلومات الإيجابية عن المشاريع المتعثرة" },
    { id: 15, text: "أرى أن توفير نفقات الشركة وحماية مواردها مسؤوليتي الشخصية" },
    { id: 16, text: "أتجاهل عدم الإبلاغ عن استخدام زملائي لميزانية الشركة في أغراض شخصية" },
    { id: 17, text: "أطبق قواعد الشركة بدقة حتى لو كانت صعبة أو غير مريحة" },
    { id: 18, text: "أعتقد أن مهاراتي تبرر تجاوز بعض الإجراءات التي يلتزم بها الآخرون" },
    { id: 19, text: "أرفض أي وساطة أو تدخل خارجي في قراراتي المهنية" },
    { id: 20, text: "أرى أن مجاملة الأشخاص ذوي النفوذ طريقة مقبولة للترقية" },
    { id: 21, text: "أحرص على توثيق كل الإجراءات التي أقوم بها لضمان المساءلة" },
    { id: 22, text: "من الطبيعي تجميل الحقائق قليلاً في بيئة العمل الصعبة لإرضاء المديرين" },
    { id: 23, text: "سأبلغ عن أي تلاعب مالي أكتشفه حتى لو كان المبلغ صغيرًا" },
    { id: 24, text: "من المقبول أخذ امتيازات بسيطة من موارد الشركة كتعويض عن ضغط العمل" },
    { id: 25, text: "سأعطي الحق لصاحبه حتى لو أغضب شخصًا ذا نفوذ كبير" },
    { id: 26, text: "أعتقد أن الشخص الذي يلتزم حرفيًا بالقوانين ينقصه الطموح" },
    { id: 27, text: "سأعترف فورًا بخطئي إذا تسبب قراري في خسارة مالية" },
    { id: 28, text: "أحيانًا أبالغ في صعوبة المهمة لأبدو أكثر كفاءة أمام المديرين" },
    { id: 29, text: "أبذل جهدي كاملاً وأحافظ على موارد الشركة حتى بدون رقابة" },
    { id: 30, text: "الحصول على عمولة مقابل تسهيل عقد تجاري قانوني" }
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
            desc: data.result_description || data.description || "شكراً لمشاركتك في هذا التقييم المهني لدراسة معايير اتخاذ القرار.",
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
