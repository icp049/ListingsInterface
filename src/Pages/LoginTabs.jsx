import React, { useState } from 'react';
import Login from './Login';
import LandLordLogin from './LandLordLogin';

const LoginTabs = () => {
  const [activeTab, setActiveTab] = useState('tenant');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleTabChange('tenant')}>Tenant</button>
        <button onClick={() => handleTabChange('landlord')}>Landlord</button>
      </div>
      {activeTab === 'tenant' ? <Login /> : <LandLordLogin />}
    </div>
  );
};

export default LoginTabs;
