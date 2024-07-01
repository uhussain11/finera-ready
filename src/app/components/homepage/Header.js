'use client'; // Ensure this directive is at the top

import PropTypes from 'prop-types';
import { useState } from 'react';
import SpringModal from '../common/SpringModal';
import FeaturesModalContent from './FeaturesModalContent';
import SignInModalContent from './SignInModalContent';
import ContactModalContent from './ContactModalContent';

const Header = () => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const openFeaturesModal = () => {
    setShowFeatures(true);
    setShowSignIn(false);
    setShowContact(false);
  };

  const openSignInModal = () => {
    setShowFeatures(false);
    setShowSignIn(true);
    setShowContact(false);
  };

  const openContactModal = () => {
    setShowFeatures(false);
    setShowSignIn(false);
    setShowContact(true);
  };

  return (
    <>
      <header className="bg-gradient-to-r from-purple-200 via-purple-300 to-purple-500 flex justify-between items-center p-4 shadow">
        <div className="text-xl font-bold">Finera</div>
        <nav>
          <ul className="flex gap-4 m-0 p-0 list-none">
            <li className="inline">
              <button
                onClick={openFeaturesModal}
                className="bg-none border-none text-base cursor-pointer p-2 hover:bg-yellow-300 rounded transition-all"
              >
                Features
              </button>
            </li>
            <li className="inline">
              <button
                onClick={openSignInModal}
                className="bg-none border-none text-base cursor-pointer p-2 hover:bg-yellow-300 rounded transition-all"
              >
                Sign In
              </button>
            </li>
            <li className="inline">
              <button
                onClick={openContactModal}
                className="bg-none border-none text-base cursor-pointer p-2 hover:bg-yellow-300 rounded transition-all"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <SpringModal isOpen={showFeatures} setIsOpen={setShowFeatures}>
        <FeaturesModalContent />
      </SpringModal>

      <SpringModal isOpen={showSignIn} setIsOpen={setShowSignIn}>
        <SignInModalContent />
      </SpringModal>

      <SpringModal isOpen={showContact} setIsOpen={setShowContact}>
        <ContactModalContent />
      </SpringModal>
    </>
  );
};

Header.propTypes = {
  shuffleInterval: PropTypes.number,
};

export default Header;
