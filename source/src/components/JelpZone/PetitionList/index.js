import React from 'react';
import CardBox from 'components/CardBox/index';
import OrderTable from './Components/OrderTable';
import {marketingData} from 'app/routes/dashboard/routes/Default/data';
import IntlMessages from 'util/IntlMessages';

const PetitionList = () => {
    return (
      <div className="app-wrapper">
        <div className="row justify-content-md-center">

            <div className="col-lg-12">

                    <div className="jr-card">
                        <div className="jr-card-header d-flex align-items-center">
                            <h3 className="mb-0"><IntlMessages id="table.recentOrders"/></h3>
                        </div>
                        <OrderTable/>
                    </div>

            </div>

        </div>
      </div>
    );
};

export default PetitionList;

