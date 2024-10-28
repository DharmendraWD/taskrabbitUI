import React, { useState } from 'react';
import { useSelector } from 'react-redux';



const ProgressBar = () => {
    const totalcounts = 4;
    const count = useSelector((state) => state.counter.value)

    return (
        <div style={{ width: '100%', marginBottom: '20px' }}>
            <div style={{ width: '100%', backgroundColor: '#eee', height: '10px', borderRadius: '5px', position: 'relative' }}>
                <div
                    style={{
                        width: `${33.3333 * count}%`,
                        backgroundColor: 'green',
                        height: '100%',
                        borderRadius: '5px',
                        position: 'absolute',
                        top: 0,
                        left:'0',
                    }}
                />
            </div>
            <div className='dotted' style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', marginTop: '-20px' }}>
                {Array.from({ length: totalcounts }, (_, index) => (
                    <div key={index}>
                        <div
                            style={{
                                width: '30px',
                                height: '30px',
                                backgroundColor: index <= count ? 'green' : 'grey',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto',
                                color: 'white',
                                fontWeight: 'bold',
                            }}
                        >
                      
                            {count == 3 ? <i class="ri-check-double-line"></i> : index+1}
                        </div>

                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgressBar;
