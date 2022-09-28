import styles from './User.module.css'

interface UserProps {
  userImage: string
  userName?: string
  userOccupation?: string
  userInfoAxis?: 'vertical' | 'horizontal'
  imageOnly?: boolean
  imageBorderless?: boolean
}

export const User = ({
    userImage,
    userName,
    userOccupation,
    userInfoAxis = 'vertical',
    imageOnly = false,
    imageBorderless = false
}: UserProps) => {
  const {
    user, uaxis__horizontal,
    u__image, u__info,
    ui__name, ui__occupation, ui__borderless
  } = styles

  const USER_CLASSES = userInfoAxis === 'vertical' ? user : `${user} ${uaxis__horizontal}`
  const IMAGE_CLASSES = imageBorderless === false ?  u__image : `${u__image} ${ui__borderless}`

  return (
    <div className={USER_CLASSES}>
      <img
        className={IMAGE_CLASSES}
        src={userImage}
        alt="User profile picture"
      />

      { !imageOnly && (
        <div className={u__info}>
          <strong className={ui__name}>{userName}</strong>
          <span className={ui__occupation}>{userOccupation}</span>
        </div>
      )}
    </div>
  )
}