import React from 'react';
import MobileNavbar from '../../Navbar/MobileNavbar';
import MobileFooter from '../../Footer/MobileFooter';

function MobileMyPointStats(){

    return(
        <div>
            <MobileNavbar />
             <div>
                <h4>포인트샵</h4>
                <h4>8000 point</h4>
            </div>
            <div>
                <table>
                    <td>
                        <h6>획득 포인트 : 8000</h6>
                        <h6>사용 포인트 : 8000</h6>
                        <h6>잔여 포인트 : 8000</h6>
                    </td>
                    <td>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<button>포인트 획득/사용내역</button>
                    </td>
                </table>
            </div>
            <br />
            <div>
                <h4>포인트 획득/사용내역</h4>
                <table>
                    <tr>
                        <h6>"상품명" "갯수" 기프티콘 교환</h6>
                        <h6>2023/2/18</h6>
                    </tr>
                    <tr>
                    <h6>"상품명" "갯수" 기프티콘 교환</h6>
                        <h6>2023/2/18</h6>
                    </tr>
                    <tr>
                    <h6>"상품명" "갯수" 기프티콘 교환</h6>
                        <h6>2023/2/18</h6>
                    </tr>
                    <tr>
                    <h6>"상품명" "갯수" 기프티콘 교환</h6>
                        <h6>2023/2/18</h6>
                    </tr>
                    <tr>
                    <h6>"상품명" "갯수" 기프티콘 교환</h6>
                        <h6>2023/2/18</h6>
                    </tr>
                </table>
            </div>
            <br />
            <MobileFooter />
        </div>
    )
}

export default MobileMyPointStats;