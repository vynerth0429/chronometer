import React from 'react';

import { ReactComponent as IconFacebook } from "./../assets/images/icon-facebook.svg";
import { ReactComponent as IconPinterest } from "./../assets/images/icon-pinterest.svg";
import { ReactComponent as IconInstagram } from "./../assets/images/icon-instagram.svg";

import SocialComp from './SocialComp';

function FooterComp() {
  return (
    <div className="flex space-x-6">
      <SocialComp
        icon={IconFacebook}
        link={'https://www.facebook.com'} />
      <SocialComp
        icon={IconPinterest}
        link={'https://www.pinterest.com/'} />
      <SocialComp
        icon={IconInstagram}
        link={'https://www.instagram.com/'} />
    </div>
  )
}

export default FooterComp;
