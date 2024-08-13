import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { FiChevronDown, FiPieChart, FiTrendingUp, FiActivity } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const ShiftingDropDown = ({ setView }) => {
  return (
    <div className="flex h-20 w-full justify-start bg-rgb(243, 244, 246) p-8 text-neutral-200 md:justify-center">
      <Tabs setView={setView} />
    </div>
  );
};

ShiftingDropDown.propTypes = {
  setView: PropTypes.func.isRequired,
};

const Tabs = ({ setView }) => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-2"
    >
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
            setView={setView}
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

Tabs.propTypes = {
  setView: PropTypes.func.isRequired,
};

const Tab = ({ children, tab, handleSetSelected, selected, setView }) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => {
        handleSetSelected(tab);
        setView(TABS[tab - 1].view);
      }}
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
        selected === tab
          ? " bg-neutral-800 text-neutral-100"
          : "text-black hover: text-neutral-400"
      }`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={`transition-transform ${
          selected === tab ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  tab: PropTypes.number.isRequired,
  handleSetSelected: PropTypes.func.isRequired,
  selected: PropTypes.number,
  setView: PropTypes.func.isRequired,
};

const Content = ({ selected, dir }) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4 z-50"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div className="overflow-hidden" key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

Content.propTypes = {
  selected: PropTypes.number.isRequired,
  dir: PropTypes.string,
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
    />
  );
};

Nub.propTypes = {
  selected: PropTypes.number,
};

const Features = () => {
  return (
    <div>
      <div className="flex gap-4">
        <div>
          <h3 className="mb-2 text-sm font-medium">AI Insights</h3>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            View AI Insights
          </a>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium">Backtesting</h3>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            View Backtesting
          </a>
        </div>
      </div>
    </div>
  );
};

const MarketData = () => {
  return (
    <div className="grid grid-cols-3 gap-4 divide-x divide-neutral-700">
      <a
        href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiTrendingUp className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">Top Gainers</span>
      </a>
      <a
        href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiActivity className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">Top Losers</span>
      </a>
      <a
        href="#"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiPieChart className="mb-2 text-xl text-indigo-300" />
        <span className="text-xs">Market News</span>
      </a>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <a href="#">
          <h4 className="mb-0.5 text-sm font-medium">Connect Portfolio</h4>
        </a>
        <a href="#">
          <h4 className="mb-0.5 text-sm font-medium">View Portfolio</h4>
        </a>
        <a href="#">
          <h4 className="mb-0.5 text-sm font-medium">Portfolio Analysis</h4>
        </a>
      </div>
    </div>
  );
};

const TABS = [
  {
    title: "Features",
    Component: Features,
    view: 'features'
  },
  {
    title: "Market Data",
    Component: MarketData,
    view: 'market_data'
  },
  {
    title: "Portfolio",
    Component: Portfolio,
    view: 'portfolio'
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));

export default ShiftingDropDown;
