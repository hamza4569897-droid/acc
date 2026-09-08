import React, { useState } from 'react';
import { 
  Settings, Activity, Minus, Plus, 
  ClipboardCheck, Video, Shield, ShieldCheck, ArrowLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function About() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(1);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative -mt-20 w-full overflow-hidden bg-primary-container text-on-primary">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center mix-blend-overlay opacity-35 scale-105 transform" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDj-zrEkkynjxju8ziGp97UjVztNArHJPHbwk4g7QMH9kRRWDIQICeeSMp8oCHy3gXCZXIdhosdzSSNd3k-VnUNTsHEyAez5tQ9L63mLr_KBisOTe7AHp6hCYGqPYGbL2EmaRTuI43L3VX_tlgtoB7LpUPAEWqj1qYQlRIer1pBzaE1w9wRPpa9n0Rq_78-76yW1zFSqXzoI82mX4QAZRq5SfbWIuA6V9TjsFC5w5l1o3gpjPLmVufX')" }}
          >
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary-container/90 via-primary-container/85 to-primary-container"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-gutter-mobile lg:px-gutter-desktop pt-32 pb-space-3xl flex flex-col gap-space-md">
          <div className="inline-flex items-center gap-space-xs self-start px-space-md py-space-2xs rounded-full bg-secondary text-on-secondary font-caption-code text-caption-code tracking-wider uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-ping"></span>
            <span>BITOTEX INDUSTRIAL HERITAGE</span>
          </div>
          
          <div className="max-w-4xl flex flex-col gap-space-sm text-start">
            <h1 className="font-display-hero text-display-hero font-bold tracking-tight text-surface-bright leading-tight">
              عن الشركة
            </h1>
            <p className="font-title-lg text-title-lg text-surface-container-high font-normal max-w-2xl leading-relaxed">
              تاريخ حافل بالريادة والابتكار في صناعة الملابس الجاهزة والنسيج للتصدير العالمي.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md mt-space-xl pt-space-xl bg-surface-container-highest/10 backdrop-blur-md rounded-xl p-space-lg text-start">
            <div className="flex flex-col border-l border-outline-variant/30 pl-space-md first:border-none first:pl-0">
              <span className="font-caption-code text-caption-code text-primary-fixed-dim uppercase tracking-wider">سنة التأسيس</span>
              <span className="font-headline-lg text-headline-lg font-bold text-surface-bright">1991</span>
              <span className="font-caption-code text-caption-code text-secondary-fixed">توسع مستمر لأكثر من ربع قرن</span>
            </div>
            <div className="flex flex-col border-l border-outline-variant/30 pl-space-md">
              <span className="font-caption-code text-caption-code text-primary-fixed-dim uppercase tracking-wider">الخبرة التراكمية</span>
              <span className="font-headline-lg text-headline-lg font-bold text-surface-bright">+27 عاماً</span>
              <span className="font-caption-code text-caption-code text-secondary-fixed">إتقان صناعي معتمد</span>
            </div>
            <div className="flex flex-col border-l border-outline-variant/30 pl-space-md">
              <span className="font-caption-code text-caption-code text-primary-fixed-dim uppercase tracking-wider">نطاق التصدير</span>
              <span className="font-headline-lg text-headline-lg font-bold text-surface-bright">QIZ #1 & #2</span>
              <span className="font-caption-code text-caption-code text-secondary-fixed">المنطقة الحرة الخاصة</span>
            </div>
            <div className="flex flex-col">
              <span className="font-caption-code text-caption-code text-primary-fixed-dim uppercase tracking-wider">معايير الامتثال</span>
              <span className="font-headline-lg text-headline-lg font-bold text-surface-bright">100%</span>
              <span className="font-caption-code text-caption-code text-secondary-fixed">شهادات الجودة العالمية</span>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="w-full py-space-3xl max-w-7xl mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
          <div className="lg:col-span-6 flex flex-col items-start text-start">
            <div className="flex items-center gap-space-xs mb-space-xs">
              <Settings className="w-5 h-5 text-secondary" />
              <span className="font-caption-code text-caption-code font-bold uppercase tracking-widest text-secondary">
                تاريخنا
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold mb-space-lg leading-tight">
              لدينا 27 عاما من الخبرة ..
            </h2>
            <div className="relative pr-space-md mb-space-lg">
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-secondary rounded-full"></div>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed text-justify">
                تأسست American Group في عام 1991 من قبل المهندس. اشرف هلال اميرهم أنشئت للتركيز على إنتاج الأقمشة والملابس الجاهزة للتصدير، ومجموعتنا التي تضم المجموعة الأولى، مجموعة Qiz # 1، ومجموعة Qiz # 2، هي الأساس لما يُعرف الآن باسم American Group، وهي مجموعة شركات نسيج متكاملة.
              </p>
            </div>
            
            <div className="w-full grid grid-cols-3 gap-space-sm bg-surface-container-low p-space-md rounded-xl text-start">
              <div className="flex flex-col gap-space-2xs">
                <span className="font-caption-code text-caption-code text-secondary font-bold">1991</span>
                <span className="font-label-sm text-label-sm font-semibold text-on-surface">التأسيس الريادي</span>
                <span className="font-caption-code text-caption-code text-on-surface-variant">انطلاق باكورة مصانع الغزل والنسيج</span>
              </div>
              <div className="flex flex-col gap-space-2xs">
                <span className="font-caption-code text-caption-code text-secondary font-bold">QIZ Agreement</span>
                <span className="font-label-sm text-label-sm font-semibold text-on-surface">التوسع الدولي</span>
                <span className="font-caption-code text-caption-code text-on-surface-variant">الاعتماد في المناطق الصناعية المؤهلة</span>
              </div>
              <div className="flex flex-col gap-space-2xs">
                <span className="font-caption-code text-caption-code text-secondary font-bold">2018 - الحاضر</span>
                <span className="font-label-sm text-label-sm font-semibold text-on-surface">التكامل الشامل</span>
                <span className="font-caption-code text-caption-code text-on-surface-variant">أتمتة رقمية وتصدير عابر للقارات</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6 flex flex-col gap-space-md">
            <div className="relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-xl group">
              <div 
                className="w-full h-80 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlp9iAsojHnnLCS_PFSx57Zxxr_uwVjX9sNoKL2a7tVWQRo0a1K0NEaVsqMRHhEpNMBwvRGyijY_vpBSvziLuUUZR8qJQeW6QRexNnkBeYSdAqz-99K4YC0Rol6E0Cjw-V75QQnqDxVXWnY9orcsvWzTJoTeSH61wrhgfq-8sGGwnJwQ4X0hElW0FHiRgtKmA12susk1qT8IMg0h7bPUFyjxrha1jMhgdKiHNkMZOaTE4C9PZVvUOk')" }}
              >
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/30 to-transparent flex flex-col justify-end p-space-lg text-on-primary">
                <span className="font-caption-code text-caption-code text-secondary-fixed uppercase tracking-wider font-semibold text-start">
                  سجل التطور الهندسي والإنشائي
                </span>
                <span className="font-title-md text-title-md font-bold text-surface-bright text-start">
                  المجمع الصناعي المتكامل — منطقة مرغم الحرة
                </span>
              </div>
            </div>
            
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between gap-space-md">
              <div className="flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface">
                  <Activity className="w-5 h-5 text-secondary" />
                </div>
                <div className="flex flex-col text-start">
                  <span className="font-label-md text-label-md font-bold text-on-surface">مخطط التوسع الموثق (1991 - 2018)</span>
                  <span className="font-caption-code text-caption-code text-on-surface-variant">أكثر من ربع قرن من التحديث الميكانيكي المستدام</span>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-space-xs font-caption-code text-caption-code text-secondary">
                <span className="inline-block w-2 h-2 rounded-full bg-secondary"></span>
                <span>وثيقة موثقة بالسجل التجاري</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion & Customer System Section */}
      <section className="w-full py-space-3xl bg-surface-container-lowest shadow-sm">
        <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
            <div className="flex flex-col text-start">
              <span className="font-caption-code text-caption-code font-bold uppercase tracking-widest text-secondary mb-space-2xs">
                المنهجية والمعايير
              </span>
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
                ركائز الأداء الصناعي في بيتوتكس
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md text-start">
              تنظيم تقني دقيق يشرف على دورة حياة الإنتاج المتكاملة لضمان الوفاء بالمواصفات الفنية العالية لكبرى العلامات التجارية.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
            {/* Accordion */}
            <div className="lg:col-span-8 flex flex-col gap-space-sm">
              {[
                {
                  id: 1,
                  title: 'المهام',
                  content: 'سعى جاهدين لكون شركة النسيج الأكثر مصداقية في هذه الصناعة من خلال تقديم منتج ذو جودة عالية مع قيمة سعرية استثنائية.',
                  tags: ['موثوقية الشحن في الموعد المحدد', 'تنافسية التسعير الصناعي']
                },
                {
                  id: 2,
                  title: 'الرؤية',
                  content: 'التوسع الريادي في الأسواق العالمية عبر الجودة المستدامة والابتكار، وترسيخ مكانتنا كشريك تصنيعي مفضل لسلاسل التوريد العالمية للملابس الجاهزة والنسيج الدقيق.',
                },
                {
                  id: 3,
                  title: 'سياسة الجودة',
                  content: 'الالتزام بأدق المعايير والمطابقة القياسية العالمية والمراقبة الرقمية المستمرة في كل مرحلة من فحص خيوط الغزل الخام حتى الحياكة والتعبئة النهائية وفق شهادات ISO 9001 و WRAP.',
                },
                {
                  id: 4,
                  title: 'قدراتنا',
                  content: 'تكامل خطوط الإنتاج من الغزل والحياكة إلى الصباغة والتشطيب والتصدير السريع بطاقة إنتاجية ضخمة تخدم الأسواق الأمريكية والأوروبية تحت مظلة المنطقة الحرة.',
                }
              ].map((item) => (
                <div key={item.id} className="bg-surface-container-low rounded-xl overflow-hidden transition-all duration-300 shadow-sm">
                  <button 
                    className="w-full flex items-center justify-between p-space-lg text-start focus:outline-none select-none" 
                    onClick={() => toggleAccordion(item.id)}
                  >
                    <div className="flex items-center gap-space-md">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center font-caption-code font-bold ${openAccordion === item.id ? 'bg-secondary-container text-on-secondary-container' : 'bg-surface-container-high text-on-surface'}`}>
                        {String(item.id).padStart(2, '0')}
                      </span>
                      <span className="font-title-md text-title-md font-bold text-on-surface">{item.title}</span>
                    </div>
                    {openAccordion === item.id ? (
                      <Minus className="text-secondary w-6 h-6" />
                    ) : (
                      <Plus className="text-on-surface-variant w-6 h-6" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openAccordion === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-space-lg pb-space-lg pt-0">
                          <div className="p-space-md bg-surface-container-lowest rounded-lg">
                            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed text-justify">
                              {item.content}
                            </p>
                            {item.tags && (
                              <div className="mt-space-md flex flex-wrap gap-space-xs">
                                <span className="px-space-sm py-space-2xs rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">{item.tags[0]}</span>
                                <span className="px-space-sm py-space-2xs rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold">{item.tags[1]}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Customer Satisfaction System Box */}
            <div className="lg:col-span-4 flex flex-col gap-space-md">
              <div className="bg-surface-container p-space-xl rounded-xl shadow-md relative overflow-hidden flex flex-col justify-between h-full">
                <div className="absolute -top-16 -left-16 w-36 h-36 bg-secondary-container/40 rounded-full blur-2xl pointer-events-none"></div>
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <span className="px-space-sm py-space-2xs rounded-full bg-secondary text-on-secondary font-caption-code text-caption-code font-bold">
                      نظام حصري للمستوردين
                    </span>
                    <ShieldCheck className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-title-lg text-title-lg font-bold text-on-surface mb-space-sm text-start">
                    نظام ارضاء العملاء
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify mb-space-lg">
                    كما أن لدينا نظامًا مخصصًا لإرضاء العملاء يتضمن التقرير اليومي، والوصول إلى كاميرات الإنتاج المباشر، وضمان المنتجات.
                  </p>
                  
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center gap-space-sm p-space-sm bg-surface-container-lowest rounded-lg shadow-sm">
                      <div className="w-9 h-9 rounded bg-surface-container-low flex items-center justify-center text-secondary shrink-0">
                        <ClipboardCheck className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col text-start">
                        <span className="font-label-md text-label-md font-bold text-on-surface">التقرير اليومي</span>
                        <span className="font-caption-code text-caption-code text-on-surface-variant">تحديثات كمية ومعدلات الإنجاز لحظياً</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-space-sm p-space-sm bg-surface-container-lowest rounded-lg shadow-sm">
                      <div className="w-9 h-9 rounded bg-surface-container-low flex items-center justify-center text-secondary shrink-0">
                        <Video className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col text-start">
                        <span className="font-label-md text-label-md font-bold text-on-surface">كاميرات الإنتاج المباشر</span>
                        <span className="font-caption-code text-caption-code text-on-surface-variant">بث مشفر ومباشر لمراقبة خطوط الحياكة</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-space-sm p-space-sm bg-surface-container-lowest rounded-lg shadow-sm">
                      <div className="w-9 h-9 rounded bg-surface-container-low flex items-center justify-center text-secondary shrink-0">
                        <Shield className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col text-start">
                        <span className="font-label-md text-label-md font-bold text-on-surface">ضمان المنتجات</span>
                        <span className="font-caption-code text-caption-code text-on-surface-variant">التزام كامل بالمطابقة الفنية والمعايير التعاقدية</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-space-xl pt-space-md border-t border-outline-variant/30 flex items-center justify-between">
                  <a className="inline-flex items-center gap-space-xs font-label-md text-label-md text-secondary font-bold hover:text-on-secondary-container transition-colors cursor-pointer">
                    <span>طلب تفعيل الدخول المباشر</span>
                    <ArrowLeft className="w-[18px] h-[18px]" />
                  </a>
                  <span className="font-caption-code text-caption-code text-outline uppercase tracking-wider">CLIENT-PORTAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-space-3xl max-w-7xl mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          <div className="flex flex-col gap-space-xs text-start">
            <div className="h-64 rounded-xl overflow-hidden bg-surface-container-low shadow-sm relative group">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCzeXN6Z_7R_TIfqq0Iu8QS3g0puF4dNExz6if2D78LYpuLN-ZS0f7_DA9u5Kl2I-tkPJtLBXqN7lRvaQbqZX0o6-AUFJRYJgHSK3Ya_heTTE3MbanxwWoxh57N0iOJnxxQVAx3BOnoG6tGZ9WGfPVMBWyecFviSW3Bl7E7gnfH74GgsOnECnW9o_Y9Jm7hoaYHqtDNW3rfBKrX5JgaJf0kZ2Fv-STCveqRe4qTwf63loxg--YtANZg')" }}
              ></div>
            </div>
            <span className="font-caption-code text-caption-code text-secondary font-semibold mt-space-2xs">مختبر ضبط الخيوط والغزل</span>
            <span className="font-title-md text-title-md font-bold text-on-surface">فحص دقيق لكثافة وشدة الألياف</span>
          </div>
          <div className="flex flex-col gap-space-xs text-start">
            <div className="h-64 rounded-xl overflow-hidden bg-surface-container-low shadow-sm relative group">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDY2p9rap3m-89peOSROpfY-p_jQhAh2vnx5KSvquzp_Ccmi4NNLjqo9_zsPt1pJ1b4xF-GHE5VmpG-ZQ_PxgCoZ3xuAULW3HYPcjeMMBEE8Clf19FLtAwO4x4_gOrZDgt9OgVwnf7B9bL0P7PMztEU_hEUf_O6idtWSy6-DOctephZvTsW6pn5Nz6A3arljQ1T3ARli7lKv1Fx00CkIsCKwXXiw1rvSOocZBfNkw6A2Eh8JlbHFm1S')" }}
              ></div>
            </div>
            <span className="font-caption-code text-caption-code text-secondary font-semibold mt-space-2xs">عنابر الحياكة الآلية الدائرية</span>
            <span className="font-title-md text-title-md font-bold text-on-surface">طاقة تصديرية تتجاوز ملايين القطع سنويًا</span>
          </div>
          <div className="flex flex-col gap-space-xs text-start">
            <div className="h-64 rounded-xl overflow-hidden bg-surface-container-low shadow-sm relative group">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAvGPjjcm3jXxVYmKwxiv1vBsSAB80_xK5LBvjZt5AN57hTM_GvhuaA2QUBMq8WpAy7MRPA7f340ii_RNHEy2ogka_qWtMQWuzMAAOrtdJziEhBo8ITZL17q-SPkN3KHsYxK6iIBBy_maZ4Rwex2jQiLykja8rMgQfVZtOUn9WuxwAWXDDXqXTBZnTxGpOv3ZCgigKLGg8P35AWVeOt8zNqG_qD3WUHYGuEW6cF0WaoNTohfzKjuZJD')" }}
              ></div>
            </div>
            <span className="font-caption-code text-caption-code text-secondary font-semibold mt-space-2xs">الصباغة والمطابقة اللونية</span>
            <span className="font-title-md text-title-md font-bold text-on-surface">معايرة ألوان رقمية تطابق درجات بانتون العالمية</span>
          </div>
        </div>
      </section>
    </div>
  );
}
