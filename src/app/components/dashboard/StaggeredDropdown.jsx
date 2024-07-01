import PropTypes from 'prop-types';
import { FiChevronDown, FiList, FiTrendingUp } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";

const StaggeredDropDown = ({ setView }) => {
  const [open, setOpen] = useState(false);

  const handleOptionClick = (view) => {
    setView(view);
    setOpen(false);
  };

  return (
    <div className="relative flex justify-center">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-indigo-500 hover:bg-indigo-500 transition-colors"
        >
          <span className="font-medium text-sm">Select View</span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] transform -translate-x-1/2 w-48 overflow-hidden"
        >
          <Option setOpen={handleOptionClick} Icon={FiList} text="Market News" view="news" />
          <Option setOpen={handleOptionClick} Icon={FiTrendingUp} text="Gainers/Losers" view="gainers_losers" />
        </motion.ul>
      </motion.div>
    </div>
  );
};

StaggeredDropDown.propTypes = {
  setView: PropTypes.func.isRequired,
};

const Option = ({ text, Icon, setOpen, view }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(view)}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

Option.propTypes = {
  text: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  setOpen: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired,
};

export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
