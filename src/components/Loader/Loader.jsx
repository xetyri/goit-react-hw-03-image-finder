import React from "react";
import Load from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from "./Loader.module.css"

const Loader =  () =>{
  return (
    <div className={s.Load}>
      <Load
        type="TailSpin"
              color="#c5000a"
              height={150}
              width={150}
              timeout={2000}
      />
    </div>
  );
};
export default Loader 