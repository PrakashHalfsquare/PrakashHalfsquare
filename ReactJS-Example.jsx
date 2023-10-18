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
