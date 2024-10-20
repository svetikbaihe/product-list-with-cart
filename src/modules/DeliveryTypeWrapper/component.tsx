import type React from 'react'
import { Link } from 'react-router-dom'
import { RoutesKeys } from '@constants/routes'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import useContainer from './hook'
import { DeliveryTypeWrapperProps } from './types'
import styles from './styles.module.scss'

const DeliveryTypeWrapper: React.FC<DeliveryTypeWrapperProps> = ({
  infoDescription,
}) => {
  const { getPathData } = useContainer()

  return (
    <div className={styles.infoBtnWrapper}>
      <Link
        to={getPathData({
          pageKey: RoutesKeys.DELIVERY,
        })}
        className={styles.backBtn}
      >
        <HiOutlineArrowNarrowLeft />
        Back To Delivery
      </Link>
      <p className={styles.descriptionWrapper}>{infoDescription}</p>
    </div>
  )
}

export default DeliveryTypeWrapper
