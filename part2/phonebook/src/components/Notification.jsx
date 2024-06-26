import './Notification.css'

const Notification = ({ message, negative }) => {
    return (
        <div className='notifi'>
            <h1 className={negative ? 'negative' : 'positive'}>{message}</h1>
        </div>
    )
}

export default Notification
