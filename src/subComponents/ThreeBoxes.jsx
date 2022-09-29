import React from 'react'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import AcUnitIcon from '@mui/icons-material/AcUnit';
function ThreeBoxes() {
  return (
    <div>
        <div id='Boxes'>
            <div className="box">
                <div className="icons">
                    <AccessAlarmIcon className='icon' /> 
                </div>
                <h1>Heading1</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Dicta est sapiente eveniet, porro consequatur illo nisi harum 
                    alias enim itaque saepe aut quisquam quaerat vero 
                    sed praesentium ex at quod.</p>
            </div>
            <div className="box">
                <div className="icons">
                    <AddToDriveIcon className='icon'  />
                </div>
                <h1>Heading2</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Dicta est sapiente eveniet, porro consequatur illo nisi harum 
                    alias enim itaque saepe aut quisquam quaerat vero 
                    sed praesentium ex at quod.</p>
            </div>
            <div className="box">
                <div className="icons">
                    <AcUnitIcon className='icon' />
                </div>
                <h1>Heading3</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Dicta est sapiente eveniet, porro consequatur illo nisi harum 
                    alias enim itaque saepe aut quisquam quaerat vero 
                    sed praesentium ex at quod.</p>
            </div>
        </div>
    </div>
  )
}

export default ThreeBoxes