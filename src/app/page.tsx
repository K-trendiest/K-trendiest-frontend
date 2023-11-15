import Navbar from './components/Navbar';

const mainDetails = {
  defaultPage: '/youtube',
  backgroundColor: '#000000',
  pointColor: '#D90429'
}

export default function ChangeColor() {
    const { defaultPage, backgroundColor, pointColor } = mainDetails;

    return (
        <div>
            <div style={{backgroundColor: backgroundColor, color: pointColor}}>
            <Navbar curpath={defaultPage} pointColor={pointColor}/>
                <div className='h-screen'>main page</div>
            </div>
        </div>
    );
};
