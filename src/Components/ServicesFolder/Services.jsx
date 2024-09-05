import './Services.css'
import servicesData from '../../Data/servicesData'

function Services() {
   
  return (
    <>
    <div className="allCards" id="services-section">
      {
        servicesData.map((service) => (
          <div key={service.id} className={service.classname}>
            <div className='service-details'>
              <img className='card-logo' src={service.image1} alt="" />
              <h3 className='product-heading'>{service.heading}</h3>
              <p className='info-para'>{service.para}</p>
              <span>{service.span} <img src={service.image2} alt="" /></span>
            </div>
            <div className={service.classname2}>
              <img src={service.image3} alt="" />
            </div>
          </div>
        ))
      }
    </div>
    </>
  )
}

export default Services