import React from 'react'
import styles from '../styles'
import {stats} from '../constants'

const Stats = () => {
  return (
    <section className={`${styles.flexCenter}`}>
      {stats.map((stat) => (
        <div className={`flex-1 flex justify-start items-center flex-row m-3`} key={stat.id}>
          <h4 className='font-poppins font-semibold xs:text-[40.89px] text-[39.89px]  xs:leading-[53.16px] text-white' >
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[45px] xs:leading-[26.58px] text-gradient uppercase ml-3 " >
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  )
}

export default Stats