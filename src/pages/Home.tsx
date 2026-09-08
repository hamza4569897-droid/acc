import React from 'react';
import { 
  ArrowLeft, FileText, Factory, Globe, Settings, 
  ShieldCheck, Truck, Sliders, Dumbbell, Shirt, Baby, 
  Award, CheckCircle, Shield, Users, Medal, CheckCircle2,
  Building2, Gem, BookOpen
} from 'lucide-react';
import { motion } from 'motion/react';

interface HomeProps {
  setPage: (page: string) => void;
}

export default function Home({ setPage }: HomeProps) {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="relative w-full -mt-20 overflow-hidden bg-primary-container text-on-primary">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Circular Knitting Automation Facility" 
            className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105 transform motion-safe:transition-transform motion-safe:duration-1000 ease-out" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIUPlkFOshemxjA4aayZHbAZgeIdzrPhCIzPMli0kE8Y3w1ZJRgRKpC1XrC7gvY-QD_APlKPfLjM7EwYE4BkSoX2IKISfpxuB7mW4R_vK_nKAt4sKi2FLlE3294TQX9kWtmBE4N5PGuQE0mLp1G0CV7Q4cIsIxbtcyvVU8dOZEmmr5NPU2HhFrpO_G8AOTcpVIqcdltRbrZonhWRM_9Q8h1Sl3UN0lB6_I4Wg6gwphZ2pVBpn3A3y1" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/80 to-primary-container/40"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#21695f_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-gutter-mobile lg:px-gutter-desktop pt-36 pb-space-3xl lg:pt-44 lg:pb-space-4xl flex flex-col items-start text-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-space-xs px-space-md py-space-2xs rounded-full bg-secondary/20 text-secondary-fixed mb-space-lg backdrop-blur-md shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
            <span className="font-caption-code text-caption-code uppercase tracking-wider font-semibold">تأسست لتصنيع وتصدير أقمشة النخبة العالمية</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display-hero-mobile lg:font-display-hero text-display-hero-mobile lg:text-display-hero font-bold tracking-tight text-on-primary max-w-4xl mb-space-md leading-tight"
          >
            American Group – Bitotex International
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body-lg text-body-lg text-primary-fixed-dim max-w-2xl mb-space-2xl leading-relaxed text-justify"
          >
            الشركة الرائدة في تصنيع وتصدير الملابس الجاهزة والنسيج المحبوك لأكبر الماركات العالمية لأكثر من 6 عقود.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md mb-space-3xl"
          >
            <button 
              onClick={() => setPage('capabilities')}
              className="inline-flex items-center justify-center gap-space-xs px-space-xl py-space-md rounded-lg bg-secondary text-on-secondary font-label-md text-label-md font-semibold hover:bg-on-secondary-fixed-variant transition-all duration-200 shadow-md"
            >
              <span>استكشف قدراتنا</span>
              <ArrowLeft className="w-[18px] h-[18px]" />
            </button>
            <button 
              onClick={() => setPage('contact')}
              className="inline-flex items-center justify-center gap-space-xs px-space-xl py-space-md rounded-lg bg-surface-container-highest/20 text-on-primary font-label-md text-label-md font-semibold backdrop-blur-md hover:bg-surface-container-highest/30 transition-all duration-200 shadow-sm"
            >
              <span>طلب العروض</span>
              <FileText className="w-[18px] h-[18px]" />
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full grid grid-cols-2 md:grid-cols-4 gap-space-md p-space-lg rounded-xl bg-surface-container-lowest/5 backdrop-blur-xl shadow-lg"
          >
            <div className="flex flex-col text-start">
              <span className="font-caption-code text-caption-code text-secondary-fixed font-semibold tracking-wider">الخبرة الصناعية</span>
              <span className="font-headline-lg text-headline-lg font-bold text-on-primary mt-space-2xs">+60 عاماً</span>
              <span className="font-caption-code text-caption-code text-primary-fixed-dim">منذ 1964 في الريادة</span>
            </div>
            <div className="flex flex-col text-start">
              <span className="font-caption-code text-caption-code text-secondary-fixed font-semibold tracking-wider">الطاقة الإنتاجية</span>
              <span className="font-headline-lg text-headline-lg font-bold text-on-primary mt-space-2xs">3.2M</span>
              <span className="font-caption-code text-caption-code text-primary-fixed-dim">قطعة سنوياً للأسواق العالمية</span>
            </div>
            <div className="flex flex-col text-start">
              <span className="font-caption-code text-caption-code text-secondary-fixed font-semibold tracking-wider">نظام التشغيل</span>
              <span className="font-headline-lg text-headline-lg font-bold text-on-primary mt-space-2xs">QIZ & Freezone</span>
              <span className="font-caption-code text-caption-code text-primary-fixed-dim">مزايا جمركية وتصدير فوري</span>
            </div>
            <div className="flex flex-col text-start">
              <span className="font-caption-code text-caption-code text-secondary-fixed font-semibold tracking-wider">الاعتماد والامتثال</span>
              <span className="font-headline-lg text-headline-lg font-bold text-on-primary mt-space-2xs">100% WRAP</span>
              <span className="font-caption-code text-caption-code text-primary-fixed-dim">معايير حوكمة وتصنيع أخلاقي</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Subsidiaries Section */}
      <section className="w-full py-space-3xl lg:py-space-4xl bg-surface">
        <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
            <div className="flex flex-col text-start">
              <div className="inline-flex items-center gap-space-2xs text-secondary font-label-md text-label-md font-semibold mb-space-2xs">
                <Building2 className="w-4 h-4" />
                <span>الهيكل المؤسسي المتكامل</span>
              </div>
              <h2 className="font-headline-xl-mobile lg:font-headline-xl text-headline-xl-mobile lg:text-headline-xl font-bold text-on-surface">
                الشركات التابعة للمجموعة
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md text-justify">
              منظومة صناعية وتصديرية متكاملة عبر مناطق مصر الصناعية والحرة، مصممة لتحقيق الكفاءة القصوى في سلاسل الإمداد العالمية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            {/* Card 1 */}
            <div className="group relative flex flex-col justify-between p-space-xl rounded-xl bg-surface-container-lowest shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-space-lg">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors duration-300">
                    <Factory className="w-[26px] h-[26px]" />
                  </div>
                  <span className="px-space-sm py-space-2xs rounded-full bg-secondary-container text-on-secondary-container font-caption-code text-caption-code font-bold tracking-wide">المنطقة الحرة الخاصة</span>
                </div>
                <span className="font-caption-code text-caption-code text-secondary font-semibold mb-space-2xs">HOLDING ENTITY · EST. 1964</span>
                <h3 className="font-title-lg text-title-lg font-bold text-on-surface mb-space-md text-start">American Group</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
                  وهي شركة في نطاق المنطقة الحرة الخاصة، هي الشركة الرائدة في مجال تصنيع وتصدير الملابس الجاهزة بالجملة. لقد قمنا بالتوريد لأكبر العلامات التجارية للأزياء الدولية مع منتجات ذات جودة عالية لأكثر من 6 عقود في American Group. نسعى إلى تطوير علاقات طويلة الأمد مع عملائنا، فريقنا المتألف من المصممين والتجار والعمال المهرة يضمنون أننا نقدم أفضل المنتجات ذات الجودة خلال المهلة المحددة.
                </p>
              </div>
              <div className="mt-space-xl pt-space-md bg-surface-container-low rounded-lg p-space-sm flex items-center justify-between text-on-surface">
                <span className="font-caption-code text-caption-code font-semibold">تصدير دولي معفى جمركياً</span>
                <ShieldCheck className="w-5 h-5 text-secondary" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative flex flex-col justify-between p-space-xl rounded-xl bg-surface-container-lowest shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-space-lg">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors duration-300">
                    <Globe className="w-[26px] h-[26px]" />
                  </div>
                  <span className="px-space-sm py-space-2xs rounded-full bg-surface-container-high text-on-surface font-caption-code text-caption-code font-bold tracking-wide">المنطقة الحرة العامة</span>
                </div>
                <span className="font-caption-code text-caption-code text-secondary font-semibold mb-space-2xs">EXPORT SPECIALIST · QIZ ACCREDITED</span>
                <h3 className="font-title-lg text-title-lg font-bold text-on-surface mb-space-md text-start">Qiz Group</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
                  وهي شركة في نطاق المنطقة الحرة العامة، هي الشركة الرائدة في مجال تصدير الملابس الجاهزة بالجملة، لقد قمنا بالتوريد لأكبر العلامات التجارية للأزياء العالمية مع منتجات ذات جودة عالية من الملابس، وفقًا لمواصفات العملاء نسعى لضمان تطوير شراكات طويلة الأمد في الإنتاج.
                </p>
              </div>
              <div className="mt-space-xl pt-space-md bg-surface-container-low rounded-lg p-space-sm flex items-center justify-between text-on-surface">
                <span className="font-caption-code text-caption-code font-semibold">اتفاقية الكويز (USA Protocol)</span>
                <Truck className="w-5 h-5 text-secondary" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative flex flex-col justify-between p-space-xl rounded-xl bg-surface-container-lowest shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-space-lg">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors duration-300">
                    <Settings className="w-[26px] h-[26px]" />
                  </div>
                  <span className="px-space-sm py-space-2xs rounded-full bg-surface-container-high text-on-surface font-caption-code text-caption-code font-bold tracking-wide">الإسكندرية 1994</span>
                </div>
                <span className="font-caption-code text-caption-code text-secondary font-semibold mb-space-2xs">INDUSTRIAL TEXTILE ARM · ALEXANDRIA</span>
                <h3 className="font-title-lg text-title-lg font-bold text-on-surface mb-space-md text-start">First Group</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
                  شركة صناعية رائدة تأسست في الإسكندرية عام 1994، متخصصة في تصدير النسيج والملابس إلى كبرى العلامات التجارية الأمريكية والعالمية، وتلتزم بأعلى معايير الجودة والمطابقة الدقيقة لمتطلبات المشترين الدوليين.
                </p>
              </div>
              <div className="mt-space-xl pt-space-md bg-surface-container-low rounded-lg p-space-sm flex items-center justify-between text-on-surface">
                <span className="font-caption-code text-caption-code font-semibold">مطابقة دقيقة للمواصفات الفنية</span>
                <Sliders className="w-5 h-5 text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Products Section */}
      <section className="w-full py-space-3xl lg:py-space-4xl bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-space-2xl">
            <span className="font-caption-code text-caption-code text-secondary font-bold uppercase tracking-wider mb-space-2xs">INDUSTRIAL PORTFOLIO</span>
            <h2 className="font-headline-xl-mobile lg:font-headline-xl text-headline-xl-mobile lg:text-headline-xl font-bold text-on-surface mb-space-sm">
              منتجاتنا
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              إنتاج صناعي متخصص بنسب دقيقة من خامات القطن المصري الفاخر والألياف التقنية المتطورة، مصنعة وفق أرقى خطوط الحياكة الدائرية والمسطحة.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            {/* Product 1 */}
            <div className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden bg-surface-container">
                <img 
                  alt="Technical performance sportswear" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80" 
                />
                <div className="absolute top-space-sm right-space-sm px-space-sm py-space-2xs rounded-full bg-primary-container/80 text-on-primary backdrop-blur-md font-caption-code text-caption-code">
                  أداء عالي الألياف
                </div>
              </div>
              <div className="p-space-lg flex flex-col text-start">
                <div className="flex items-center justify-between mb-space-xs">
                  <span className="font-caption-code text-caption-code text-secondary font-semibold">TECH-WEAVE 280G</span>
                  <Dumbbell className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-title-md text-title-md font-bold text-on-surface mb-space-2xs">قسم/ملابس رياضية</h3>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 mb-space-md">
                  أقمشة ممتصة للعرق، مرونة خماسية الاتجاهات وتكنولوجيا نسيج هوائي مخصص للتمارين الاحترافية وتوريدات الماركات الرياضية.
                </p>
                <button onClick={() => setPage('capabilities')} className="flex items-center justify-end gap-space-2xs pt-space-xs text-secondary font-label-md text-label-md font-semibold group-hover:text-on-surface transition-colors">
                  <span>عرض المواصفات الفنية</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Product 2 */}
            <div className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden bg-surface-container">
                <img 
                  alt="Premium women knitwear" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80" 
                />
                <div className="absolute top-space-sm right-space-sm px-space-sm py-space-2xs rounded-full bg-primary-container/80 text-on-primary backdrop-blur-md font-caption-code text-caption-code">
                  تريكو وحياكة راقية
                </div>
              </div>
              <div className="p-space-lg flex flex-col text-start">
                <div className="flex items-center justify-between mb-space-xs">
                  <span className="font-caption-code text-caption-code text-secondary font-semibold">FINE KNIT LUXE</span>
                  <Shirt className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-title-md text-title-md font-bold text-on-surface mb-space-2xs">قسم/ملابس حريمي</h3>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 mb-space-md">
                  سويترات كشميرية ناعمة، بلايز قطنية فاخرة ومنتجات حياكة ناعمة مصممة لأشهر بيوت الموضة والأزياء الراقية في أوروبا وأمريكا.
                </p>
                <button onClick={() => setPage('capabilities')} className="flex items-center justify-end gap-space-2xs pt-space-xs text-secondary font-label-md text-label-md font-semibold group-hover:text-on-surface transition-colors">
                  <span>عرض المواصفات الفنية</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Product 3 */}
            <div className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden bg-surface-container">
                <img 
                  alt="Men's polo shirts" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80" 
                />
                <div className="absolute top-space-sm right-space-sm px-space-sm py-space-2xs rounded-full bg-primary-container/80 text-on-primary backdrop-blur-md font-caption-code text-caption-code">
                  قطن مصري 100%
                </div>
              </div>
              <div className="p-space-lg flex flex-col text-start">
                <div className="flex items-center justify-between mb-space-xs">
                  <span className="font-caption-code text-caption-code text-secondary font-semibold">PIQUE & INTERLOCK</span>
                  <Shirt className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-title-md text-title-md font-bold text-on-surface mb-space-2xs">قسم/ملابس رجالي</h3>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 mb-space-md">
                  قمصان بولو بيكيه متينة، تي شيرتات سنجل جيرسيه ممشط، وبناطيل كاجوال مصنعة بأعلى درجات ثبات الصباغة ومقاومة الانكماش.
                </p>
                <button onClick={() => setPage('capabilities')} className="flex items-center justify-end gap-space-2xs pt-space-xs text-secondary font-label-md text-label-md font-semibold group-hover:text-on-surface transition-colors">
                  <span>عرض المواصفات الفنية</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Product 4 */}
            <div className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden bg-surface-container">
                <img 
                  alt="Organic baby clothes" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80" 
                />
                <div className="absolute top-space-sm right-space-sm px-space-sm py-space-2xs rounded-full bg-primary-container/80 text-on-primary backdrop-blur-md font-caption-code text-caption-code">
                  معيار Oeko-Tex آمن
                </div>
              </div>
              <div className="p-space-lg flex flex-col text-start">
                <div className="flex items-center justify-between mb-space-xs">
                  <span className="font-caption-code text-caption-code text-secondary font-semibold">ORGANIC BABY KNIT</span>
                  <Baby className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-title-md text-title-md font-bold text-on-surface mb-space-2xs">قسم/ملابس الأطفال</h3>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 mb-space-md">
                  ملابس أطفال ناعمة من القطن العضوي الخالص، خالية تماماً من الكيماويات الضارة، مطابقة لمعايير السلامة وصحة بشرة الأطفال العالمية.
                </p>
                <button onClick={() => setPage('capabilities')} className="flex items-center justify-end gap-space-2xs pt-space-xs text-secondary font-label-md text-label-md font-semibold group-hover:text-on-surface transition-colors">
                  <span>عرض المواصفات الفنية</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="w-full py-space-3xl lg:py-space-4xl bg-primary-container text-on-primary relative overflow-hidden">
        <div className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>
        <div className="absolute -left-32 -top-32 w-96 h-96 rounded-full bg-tertiary-container/30 blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-3xl">
            <div className="inline-flex items-center gap-space-2xs px-space-md py-space-2xs rounded-full bg-secondary/20 text-secondary-fixed mb-space-sm backdrop-blur-md">
              <Gem className="w-4 h-4" />
              <span className="font-caption-code text-caption-code font-bold">التميز الصناعي والتنافسية العالمية</span>
            </div>
            <h2 className="font-headline-xl-mobile lg:font-headline-xl text-headline-xl-mobile lg:text-headline-xl font-bold text-on-primary mb-space-md">
              لماذا تختار شركتنا
            </h2>
            <p className="font-body-lg text-body-lg text-primary-fixed-dim leading-relaxed text-justify">
              شريككم الاستراتيجي الموثوق في صناعة وتصدير النسيج، بخبرة تمتد لعقود وتجهيزات تقنية متقدمة تلبي أدق المواصفات العالمية.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            <div className="flex flex-col p-space-xl rounded-xl bg-surface-container-lowest/5 backdrop-blur-md shadow-sm hover:bg-surface-container-lowest/10 transition-colors text-start">
              <div className="w-14 h-14 rounded-xl bg-secondary-fixed/20 text-secondary-fixed flex items-center justify-center mb-space-lg">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="font-title-lg text-title-lg font-bold text-on-primary mb-space-2xs">الجودة</h3>
              <p className="font-body-md text-body-md text-primary-fixed-dim leading-relaxed">
                فحص أوتوماتيكي ومختبري دقيق لخصائص الشد، المرونة، وثبات الألوان ضد الاحتكاك والغسيل وفق أدق المعايير العالمية.
              </p>
            </div>
            
            <div className="flex flex-col p-space-xl rounded-xl bg-surface-container-lowest/5 backdrop-blur-md shadow-sm hover:bg-surface-container-lowest/10 transition-colors text-start">
              <div className="w-14 h-14 rounded-xl bg-secondary-fixed/20 text-secondary-fixed flex items-center justify-center mb-space-lg">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-title-lg text-title-lg font-bold text-on-primary mb-space-2xs">طريقة معتمدة</h3>
              <p className="font-body-md text-body-md text-primary-fixed-dim leading-relaxed">
                منهجية تصنيع قياسية موثقة خطوة بخطوة من تتبع خيوط الغزل وحتى التعبئة والشحن النهائي بما يضمن مطابقة 100% للعينات المعتمدة.
              </p>
            </div>

            <div className="flex flex-col p-space-xl rounded-xl bg-surface-container-lowest/5 backdrop-blur-md shadow-sm hover:bg-surface-container-lowest/10 transition-colors text-start">
              <div className="w-14 h-14 rounded-xl bg-secondary-fixed/20 text-secondary-fixed flex items-center justify-center mb-space-lg">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-title-lg text-title-lg font-bold text-on-primary mb-space-2xs">حسن الأمن والسمعة</h3>
              <p className="font-body-md text-body-md text-primary-fixed-dim leading-relaxed">
                سجل ناصع ممتد لأكثر من ستين عاماً من الموثوقية التامة والوفاء الصارم بمواعيد التسليم لشركائنا الدوليين في كبرى قارات العالم.
              </p>
            </div>

            <div className="flex flex-col p-space-xl rounded-xl bg-surface-container-lowest/5 backdrop-blur-md shadow-sm hover:bg-surface-container-lowest/10 transition-colors text-start">
              <div className="w-14 h-14 rounded-xl bg-secondary-fixed/20 text-secondary-fixed flex items-center justify-center mb-space-lg">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-title-lg text-title-lg font-bold text-on-primary mb-space-2xs">مجموعات عمل</h3>
              <p className="font-body-md text-body-md text-primary-fixed-dim leading-relaxed">
                كوادر فنية مدربة وهندسة تصنيع متخصصة تعمل بتناغم مستمر لضمان أعلى مستويات الإنتاجية والابتكار المستمر في تقنيات الحياكة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Certifications */}
      <section className="w-full py-space-3xl bg-surface">
        <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-space-2xl">
            <span className="font-caption-code text-caption-code text-secondary font-bold uppercase tracking-wider mb-space-2xs">GLOBAL ACCREDITATION</span>
            <h2 className="font-headline-xl-mobile lg:font-headline-xl text-headline-xl-mobile lg:text-headline-xl font-bold text-on-surface mb-space-xs">
              شهاداتنا واعتماداتنا الدولية
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              التزامنا بأعلى المعايير الصناعية العالمية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-xl max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-space-lg p-space-xl rounded-xl bg-surface-container-lowest shadow-md text-start">
              <div className="w-20 h-20 shrink-0 rounded-2xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
                <CheckCircle className="w-11 h-11" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-space-xs mb-space-2xs">
                  <span className="font-title-lg text-title-lg font-bold text-on-surface">WRAP Certified</span>
                  <span className="px-space-xs py-space-2xs rounded bg-secondary-fixed text-on-secondary-fixed font-caption-code text-caption-code font-bold">GOLD LEVEL</span>
                </div>
                <span className="font-caption-code text-caption-code text-secondary font-semibold mb-space-xs">Worldwide Responsible Accredited Production</span>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  شهادة الامتثال العالمي للإنتاج المسؤول في صناعة الملابس، بما يشمل حقوق العمالة، بيئة العمل الآمنة والمسؤولية الأخلاقية الشاملة.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-space-lg p-space-xl rounded-xl bg-surface-container-lowest shadow-md text-start">
              <div className="w-20 h-20 shrink-0 rounded-2xl bg-surface-container-high flex items-center justify-center text-on-surface">
                <Medal className="w-11 h-11" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-space-xs mb-space-2xs">
                  <span className="font-title-lg text-title-lg font-bold text-on-surface">ISO Certified</span>
                  <span className="px-space-xs py-space-2xs rounded bg-surface-container-high text-on-surface font-caption-code text-caption-code font-bold">9001 & 14001</span>
                </div>
                <span className="font-caption-code text-caption-code text-secondary font-semibold mb-space-xs">International Organization for Standardization</span>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  شهادة نظام إدارة الجودة الشاملة والإدارة البيئية المستدامة، لضمان مخرجات صناعية ذات اتساق وموثوقية فائقة في كافة خطوط الإنتاج.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Free Zone */}
      <section className="w-full relative py-space-3xl lg:py-space-4xl bg-primary-container text-on-primary overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504917595217-d4f3e5362e30?auto=format&fit=crop&q=80')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-l from-primary-container via-primary-container/90 to-primary-container/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-space-2xl text-start">
            <div className="flex flex-col max-w-2xl">
              <div className="inline-flex items-center gap-space-xs px-space-md py-space-2xs rounded-full bg-secondary-container/20 text-secondary-fixed mb-space-md w-fit backdrop-blur-md">
                <Building2 className="w-4 h-4" />
                <span className="font-caption-code text-caption-code font-semibold">بوابة التصدير الاستراتيجي</span>
              </div>
              <h2 className="font-headline-xl-mobile lg:font-headline-xl text-headline-xl-mobile lg:text-headline-xl font-bold text-on-primary mb-space-md">
                المنطقة الحرة الخاصة
              </h2>
              <p className="font-body-lg text-body-lg text-primary-fixed-dim leading-relaxed text-justify mb-space-lg">
                تسهيلات استثمارية ولوجستية رائدة للتصدير الدولي للأسواق الأمريكية والأوروبية
              </p>
              
              <div className="flex flex-wrap gap-space-md text-on-primary font-caption-code text-caption-code">
                <div className="flex items-center gap-space-2xs bg-surface-container-lowest/10 px-space-md py-space-xs rounded-lg backdrop-blur-sm">
                  <CheckCircle2 className="w-[18px] h-[18px] text-secondary-fixed" />
                  <span>إعفاءات جمركية وضريبية كاملة</span>
                </div>
                <div className="flex items-center gap-space-2xs bg-surface-container-lowest/10 px-space-md py-space-xs rounded-lg backdrop-blur-sm">
                  <CheckCircle2 className="w-[18px] h-[18px] text-secondary-fixed" />
                  <span>قرب ميناء الإسكندرية الدولي</span>
                </div>
                <div className="flex items-center gap-space-2xs bg-surface-container-lowest/10 px-space-md py-space-xs rounded-lg backdrop-blur-sm">
                  <CheckCircle2 className="w-[18px] h-[18px] text-secondary-fixed" />
                  <span>شحن سريع للولايات المتحدة وأوروبا</span>
                </div>
              </div>
            </div>
            
            <div className="shrink-0">
              <button 
                onClick={() => setPage('about')}
                className="inline-flex items-center gap-space-sm px-space-2xl py-space-md rounded-lg bg-secondary text-on-secondary font-label-md text-label-md font-bold hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all duration-200 shadow-xl cursor-pointer"
              >
                <span>اقرأ المزيد</span>
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Comprehensive Site & Services Index Section (فهرس الموقع والخدمات) */}
      <section id="index" className="w-full py-space-3xl lg:py-space-4xl bg-surface-container-lowest border-t border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-gutter-mobile lg:px-gutter-desktop">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md text-start">
            <div>
              <div className="inline-flex items-center gap-space-2xs text-secondary font-label-md text-label-md font-semibold mb-space-2xs">
                <BookOpen className="w-[18px] h-[18px]" />
                <span>دليل وفهرس المحتويات الشامل</span>
              </div>
              <h2 className="font-headline-xl-mobile lg:font-headline-xl text-headline-xl-mobile lg:text-headline-xl font-bold text-on-surface">
                فهرس الموقع والخدمات الصناعية
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
              خريطة تفاعلية وسريعة لجميع أقسام الموقع، الكيانات المؤسسية، خطوط الإنتاج، والاعتمادات الدولية للوصول المباشر.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg text-start">
            {/* Index Category 1: Navigation & Pages */}
            <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-space-xs text-secondary font-title-md font-bold mb-space-sm pb-space-xs border-b border-outline-variant/30">
                  <Globe className="w-5 h-5" />
                  <span>صفحات الموقع</span>
                </div>
                <ul className="space-y-space-xs font-body-md text-body-md">
                  <li>
                    <button onClick={() => { setPage('home'); window.scrollTo(0, 0); }} className="text-on-surface hover:text-secondary font-medium transition-colors flex items-center justify-between w-full text-start cursor-pointer">
                      <span>الصفحة الرئيسية (Index)</span>
                      <ArrowLeft className="w-4 h-4 opacity-50" />
                    </button>
                  </li>
                  <li>
                    <button onClick={() => { setPage('about'); window.scrollTo(0, 0); }} className="text-on-surface hover:text-secondary font-medium transition-colors flex items-center justify-between w-full text-start cursor-pointer">
                      <span>عن الشركة وتاريخنا</span>
                      <ArrowLeft className="w-4 h-4 opacity-50" />
                    </button>
                  </li>
                  <li>
                    <button onClick={() => { setPage('capabilities'); window.scrollTo(0, 0); }} className="text-on-surface hover:text-secondary font-medium transition-colors flex items-center justify-between w-full text-start cursor-pointer">
                      <span>قدراتنا وخطوط الإنتاج</span>
                      <ArrowLeft className="w-4 h-4 opacity-50" />
                    </button>
                  </li>
                  <li>
                    <button onClick={() => { setPage('contact'); window.scrollTo(0, 0); }} className="text-on-surface hover:text-secondary font-medium transition-colors flex items-center justify-between w-full text-start cursor-pointer">
                      <span>اتصل بنا وطلب العروض</span>
                      <ArrowLeft className="w-4 h-4 opacity-50" />
                    </button>
                  </li>
                </ul>
              </div>
              <div className="pt-space-md mt-space-md border-t border-outline-variant/20">
                <span className="font-caption-code text-caption-code text-secondary font-semibold">4 أقسام رئيسية معتمدة</span>
              </div>
            </div>

            {/* Index Category 2: Subsidiaries */}
            <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-space-xs text-secondary font-title-md font-bold mb-space-sm pb-space-xs border-b border-outline-variant/30">
                  <Building2 className="w-5 h-5" />
                  <span>الشركات والكيانات</span>
                </div>
                <ul className="space-y-space-xs font-body-md text-body-md">
                  <li>
                    <button onClick={() => { setPage('about'); window.scrollTo(0, 0); }} className="text-on-surface hover:text-secondary transition-colors flex items-center justify-between w-full text-start cursor-pointer">
                      <span>American Group (المنطقة الحرة)</span>
                      <span className="font-caption-code text-caption-code text-outline">1964</span>
                    </button>
                  </li>
                  <li>
                    <button onClick={() => { setPage('about'); window.scrollTo(0, 0); }} className="text-on-surface hover:text-secondary transition-colors flex items-center justify-between w-full text-start cursor-pointer">
                      <span>Qiz Group (اتفاقية الكويز)</span>
                      <span className="font-caption-code text-caption-code text-outline">QIZ #1 & #2</span>
                    </button>
                  </li>
                  <li>
                    <button onClick={() => { setPage('about'); window.scrollTo(0, 0); }} className="text-on-surface hover:text-secondary transition-colors flex items-center justify-between w-full text-start cursor-pointer">
                      <span>First Group (مجمع مرغم)</span>
                      <span className="font-caption-code text-caption-code text-outline">1994</span>
                    </button>
                  </li>
                  <li>
                    <button onClick={() => { setPage('contact'); window.scrollTo(0, 0); }} className="text-on-surface hover:text-secondary transition-colors flex items-center justify-between w-full text-start cursor-pointer">
                      <span>فروع ومواقع المصانع</span>
                      <span className="font-caption-code text-caption-code text-outline">3 فروع</span>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="pt-space-md mt-space-md border-t border-outline-variant/20">
                <span className="font-caption-code text-caption-code text-secondary font-semibold">منظومة صناعية وتصديرية متكاملة</span>
              </div>
            </div>

            {/* Index Category 3: Products */}
            <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-space-xs text-secondary font-title-md font-bold mb-space-sm pb-space-xs border-b border-outline-variant/30">
                  <Shirt className="w-5 h-5" />
                  <span>دليل المنتجات</span>
                </div>
                <ul className="space-y-space-xs font-body-md text-body-md">
                  <li>
                    <button onClick={() => { setPage('capabilities'); window.scrollTo(0, 0); }} className="text-on-surface hover:text-secondary transition-colors flex items-center justify-between w-full text-start cursor-pointer">
                      <span>قسم الملابس الرياضية (Tech-Weave)</span>
                      <ArrowLeft className="w-3.5 h-3.5 opacity-50" />
                    </button>
                  </li>
                  <li>
                    <button onClick={() => { setPage('capabilities'); window.scrollTo(0, 0); }} className="text-on-surface hover:text-secondary transition-colors flex items-center justify-between w-full text-start cursor-pointer">
                      <span>قسم الملابس الحريمي (Fine Knit)</span>
                      <ArrowLeft className="w-3.5 h-3.5 opacity-50" />
                    </button>
                  </li>
                  <li>
                    <button onClick={() => { setPage('capabilities'); window.scrollTo(0, 0); }} className="text-on-surface hover:text-secondary transition-colors flex items-center justify-between w-full text-start cursor-pointer">
                      <span>قسم الملابس الرجالي (Piqué & Interlock)</span>
                      <ArrowLeft className="w-3.5 h-3.5 opacity-50" />
                    </button>
                  </li>
                  <li>
                    <button onClick={() => { setPage('capabilities'); window.scrollTo(0, 0); }} className="text-on-surface hover:text-secondary transition-colors flex items-center justify-between w-full text-start cursor-pointer">
                      <span>قسم ملابس الأطفال (Organic Baby Knit)</span>
                      <ArrowLeft className="w-3.5 h-3.5 opacity-50" />
                    </button>
                  </li>
                </ul>
              </div>
              <div className="pt-space-md mt-space-md border-t border-outline-variant/20">
                <span className="font-caption-code text-caption-code text-secondary font-semibold">3.2 مليون قطعة سنوياً</span>
              </div>
            </div>

            {/* Index Category 4: Industrial Capabilities & QC */}
            <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-space-xs text-secondary font-title-md font-bold mb-space-sm pb-space-xs border-b border-outline-variant/30">
                  <Factory className="w-5 h-5" />
                  <span>خطوط الإنتاج والاعتماد</span>
                </div>
                <ul className="space-y-space-xs font-body-md text-body-md">
                  <li>
                    <button onClick={() => { setPage('capabilities'); window.scrollTo(0, 0); }} className="text-on-surface hover:text-secondary transition-colors flex items-center justify-between w-full text-start cursor-pointer">
                      <span>الحياكة الدائرية (250+ ماكينة)</span>
                      <span className="font-caption-code text-caption-code text-outline">GG 14-44</span>
                    </button>
                  </li>
                  <li>
                    <button onClick={() => { setPage('capabilities'); window.scrollTo(0, 0); }} className="text-on-surface hover:text-secondary transition-colors flex items-center justify-between w-full text-start cursor-pointer">
                      <span>الطباعة الرقمية والقص الآلي CAD/CAM</span>
                      <span className="font-caption-code text-caption-code text-outline">Laser Cut</span>
                    </button>
                  </li>
                  <li>
                    <button onClick={() => { setPage('capabilities'); window.scrollTo(0, 0); }} className="text-on-surface hover:text-secondary transition-colors flex items-center justify-between w-full text-start cursor-pointer">
                      <span>التطريز والخياطة الهندسية</span>
                      <span className="font-caption-code text-caption-code text-outline">1200 SPM</span>
                    </button>
                  </li>
                  <li>
                    <button onClick={() => { setPage('contact'); window.scrollTo(0, 0); }} className="text-on-surface hover:text-secondary transition-colors flex items-center justify-between w-full text-start cursor-pointer">
                      <span>شهادات WRAP و ISO 9001 & 14001</span>
                      <span className="font-caption-code text-caption-code text-secondary font-bold">100%</span>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="pt-space-md mt-space-md border-t border-outline-variant/20">
                <span className="font-caption-code text-caption-code text-secondary font-semibold">45,000 كجم إنتاج يومي</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
