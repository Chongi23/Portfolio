import React from 'react';
import { GoVideo, GoPeople, GoFlame } from "react-icons/go";

export default function Footer() {
  return (
    <footer>
      <ul>
        <li><a href="https://github.com/Chongi23">GitHub<GoFlame/></a></li>
        <li><a href="https://www.linkedin.com/in/krysta-gonzalez-web-developer"><GoPeople/></a></li>
        <li><a href="https://www.youtube.com/channel/UC97mnXeHjH_hjzemTfukuiA"><GoVideo /></a>
         </li>
      </ul>
    </footer>
  );
}
