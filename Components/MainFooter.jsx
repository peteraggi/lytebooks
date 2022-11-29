
function MainFooter(){
    return(
        <footer>
            <div className="ftr_ctr">
                <div className="ftr_up_flex">
                    <div className="ftr_rw1">
                        <div className="ftr_hding">I am Looking for</div>
                        <a className="ftr_link">Inventory management system</a>
                    </div>
                    <div className="ftr_rw2">
                        <div className="ftr_hding">Learn more..</div>
                        <div className="ftr_link">How to use Lyte Books</div>
                    </div>
                    <div className="ftr_rw3">
                        <div className="ftr_hding">Important Links</div>
                        <a className="ftr_link">Contact us</a>
                        <a className="ftr_link">Terms and conditions</a>
                        <a className="ftr_link">Privacy policy</a>
                        <a className="ftr_link">About us</a>
                    </div>
                </div>
                <div className="ftr_lw_flex"></div>
                <div className="ftr-lw-end">
                  <div>
                  {new Date().getFullYear()} &copy; Kanlyte Technologies LTD
                 </div>
                  <div>All Rights Reserved</div>
                 </div>
            </div>
        </footer> 
    )
}
export default MainFooter;