import React, { useState } from 'react';
import { useEffect } from 'react';

function Popup() {
  const [showPopup, setShowPopup] = useState(true);
  const [showPopupbyDef, setShowPopupByDef] = useState(true);

  const handleClose = () => {
    setShowPopup(false);
  };


useEffect(() => {
setTimeout(() => {
  setShowPopupByDef(false)
}, 5000);

}, [])


  return (
     <div className={`text-center popupParent mx-auto max-w-[750px] h-full flex justify-center items-center z-50 ${showPopup ? 'visible' : 'invisible'} ${showPopupbyDef ? 'displayNone' : ""}`}>
      <div className="bg-white rounded-lg shadow-md p-6 w-full relative">
        <button className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700" onClick={handleClose}>
          &times;
        </button>
        <div className='relative'>
        <img src="https://s3.lightboxcdn.com/vendors/4921a0e7-128c-4d67-8262-48575b9dd75f/uploads/8c8d44dd-4a01-4491-b964-30b88caf9df4/Desktopaltoption21.jpg" alt="Taskrabbit image" className="max-w-[702px] popupImg h-48 object-cover rounded-lg mb-4" />
        <div className='absolute top-0 text-left pl-[30px] pt-[10px] '>
        <h2 className="text-2xl font-bold whiteClr">Lorem, ipsum.</h2>
        <h2 className="text-2xl font-bold whiteClr">Lorem, ipsum dolor.?</h2>
        </div>
        </div>
        <p className="text-gray-700 mb-6">Lorem ipsum, dolor sit amet consecteligendi consequuntur mollitia ab tenetur quis? Debitis, impedit ipsam. Ipsum, illum excepturi.</p>
        <div className="flex flex-col space-y-4">
          <input type="email" className="border rounded-md px-4 py-2" placeholder="Email address" />
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md" type="button">Send me a discount</button>
        </div>
        <p className="text-sm text-gray-500 mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem distinctio unde suscipit id, doloribus perspiciatis fuga impedit facere fugit nesciunt deleniti omnis obcaecati dolor sunt excepturi quis porro nam dolores dolor sunt excepturi quis porro nam dolores.</p>   

      </div>
    </div>
  );
}

export default Popup;