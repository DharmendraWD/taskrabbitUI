import React from 'react'

function ContentUpperFooter({ paddingBelllowImg = "default-class"}) {
  return (
    <div>
          <div className={`ContentUpperFooter_Img flexSpaceAround ${paddingBelllowImg}`}>
              <img src="https://assets.taskrabbit.com/v3/assets/static/homepage/publications/brit-co-5317930631ee67760bfc333941f2433f37284d57171a3d55d909b44b2511c35c.svg" alt="" className={`ContentUpperFooter_image`} />
              <img src="https://assets.taskrabbit.com/v3/assets/static/homepage/publications/new-york-times-51bd15b40e2435e27c956746ed315cf48af0645e1226004408d223411f6194b4.svg" alt="" className={`ContentUpperFooter_image`} />
          </div>

          <div className="ContentUpperFooter_Txt flexSpaceAround">
            <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A ipsa debitis neque fugiat at aliquam repellat maxime. Ipsum, consectetur ullam cupiditate rerum fuga quaerat incidunt at! Voluptatibus voluptate veritatis itaque.</p>
            <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A ipsa debitis neque fugiat at aliquam repellat maxime. Ipsum, consectetur ullam cupiditate rerum fuga quaerat incidunt at! Voluptatibus voluptate veritatis itaque.</p>
          </div>
    </div>
  )
}

export default ContentUpperFooter