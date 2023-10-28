// active tab
const [activeTab, setActiveTab] = useState("All");
const handleTabClick = (tabName) => {
  setActiveTab(tabName);
};

<div className="bg-border-divder h-10 p-1 gap-2 flex rounded-full">
  <button
    type="button"
    className={`justify-center text-sm uppercase font-semibold flex items-center px-2 py-1 rounded-full w42 ${
      activeTab === "All" ? "bg-white text-text-primary" : "text-text-secondary"
    }`}
    onClick={() => handleTabClick("All")}
  >
    All
  </button>
  <button
    type="button"
    className={`justify-center text-sm uppercase font-semibold flex items-center px-2 py-1 rounded-full w68 ${
      activeTab === "Active"
        ? "bg-white text-text-primary"
        : "text-text-secondary"
    }`}
    onClick={() => handleTabClick("Active")}
  >
    Active
  </button>
  <button
    type="button"
    className={`justify-center text-sm uppercase font-semibold flex items-center px-2 py-1 rounded-full w104 ${
      activeTab === "Completed"
        ? "bg-white text-text-primary"
        : "text-text-secondary"
    }`}
    onClick={() => handleTabClick("Completed")}
  >
    Completed
  </button>
</div>;

// Image import

const WhiteDoc = require("./white-doc-new.png");

export { BlueCameraVideo };
<img src={LogoImg} alt="PLAT" className="mx-auto" />;

// Step change
const [currentStep, setCurrentStep] = useState(1);
const handleNext = () => {
  if (currentStep < 4) {
    setCurrentStep(currentStep + 1);
  }
};

const handlePrev = () => {
  if (currentStep > 1) {
    setCurrentStep(currentStep - 1);
  }
};

<div className="flex gap-4 mt-3 pr-3 pl-1 md:flex-nowrap sm:flex-wrap flex-wrap">
  <div
    className={`mx-3 tab w-full  font-semibold  ${
      currentStep >= 1
        ? "tab-active text-brand-primary  bg-bg-gray"
        : "tab-inactive text-text-secondary"
    }`}
  >
    <span className="text-sm">Creating a warm-up webinar</span>
  </div>
  <div
    className={`mx-3  tab w-full  font-semibold  ${
      currentStep >= 2
        ? "tab-active text-brand-primary  bg-bg-gray"
        : "tab-inactive text-text-secondary"
    }`}
  >
    <span className="text-sm">Create a course card for sales</span>
  </div>
</div>;

{
  currentStep === 1 && <Step2 onNext={handleNext} />;
}
{
  currentStep === 2 && <Step2 onNext={handleNext} onPrev={handlePrev} />;
}

//
