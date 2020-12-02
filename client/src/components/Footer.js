import React from 'react';

export default class Footer extends React.Component {
    render() {
        return ( 
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 pt-5 pb-1">
                            <h4>Caloría</h4>
                            <ul className="list-unstyled">
                                <li>These</li>
                                <li>are</li>
                                <li>not</li>
                                <li>links</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 pt-5 pb-1">
                            <h4>Caloría</h4>
                            <ul className="list-unstyled">
                                <li>These</li>
                                <li>are</li>
                                <li>not</li>
                                <li>links</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 pt-5 pb-1">
                            <h4>Caloría</h4>
                            <ul className="list-unstyled">
                                <li>These</li>
                                <li>are</li>
                                <li>not</li>
                                <li>links</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 pt-5 pb-1">
                            <h4>Caloría</h4>
                            <ul className="list-unstyled">
                                <li>These</li>
                                <li>are</li>
                                <li>not</li>
                                <li>links</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <p className="text-center">Copyright &copy;{new Date().getFullYear()} <b>sneak-e</b>. All Rights Reserved. Made with ❤️</p>
                    </div>
                </div>
            </div>
            
        );
    }
}