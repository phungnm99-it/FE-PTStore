import React,{useState} from 'react';
import Modal from 'react-modal/lib/components/Modal';
import "../../css/shipper/DeliveryHistory.css"
import { customStyles } from '../../utils/cssUtils';
import OrderHistoryDetail from './OrderHistoryDetail';

function DeliveryHistory (props) {
    const [model, setModel] = useState(false);
    return (
        <div>
            <div className="deliveryHistory">
                <div className="account">
                    <div className="account-management">
                        <div className="container-fluid">
                        <h4 className="c-grey-900 mT-10 mB-30">
                            LỊCH SỬ GIAO HÀNG
                        </h4>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="bgc-white bd bdrs-3 p-20 mB-20">
                                    <h4 className="c-grey-900 mB-20">Danh sách</h4>
                                    <div className="dataTables_wrapper">
                                        <div id="dataTable_filter" className="dataTables_filter">
                                            <input
                                            type="search"
                                            className="inputSearch"
                                            placeholder="Bạn cần tìm..."
                                            aria-controls="dataTable"
                                            />
                                            <button className="btn-Search">Tìm kiếm</button>
                                        </div>
                                        <table className="table table-striped table-bordered dataTable">
                                            <thead>
                                                <tr role="row">
                                                    <th className="sorting" id="Shipper-IDCol">
                                                    Mã đơn hàng
                                                    </th>
                                                    <th className="sorting" id="Shipper-UserNameCol">
                                                    Tên người nhận
                                                    </th>
                                                    <th className="sorting_desc" id="Shipper-PhoneCol">
                                                    Số điện thoại
                                                    </th>                               
                                                    <th className="sorting" id="Shipper-AddressCol">
                                                    Địa chỉ
                                                    </th>
                                                    <th className="sorting_desc" id="Shipper-TimeCol">
                                                    Thời gian giao
                                                    </th> 
                                                    <th className="sorting_desc" id="Shipper-StatusCol">
                                                    Tình trạng
                                                    </th> 
                                                    <th className="sorting" id="Shipper-ControlCol">
                                                    Tác vụ
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr role="row" className="ood">
                                                <td>HFUIS95859</td>
                                                <td>Phan Nguyễn Thủy Tiên</td>
                                                <td>0858679912</td>
                                                <td>Võ Văn Ngân, TP Thủ Đức, TPHCM</td>
                                                <td>09/12/2021</td>
                                                <td>Giao thành công</td>
                                                <td>
                                                <button
                                                    className="btnAccept"
                                                    onClick={() => setModel(true)}
                                                >Chi tiết
                                                </button>
                                                
                                                </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal isOpen={model} style={customStyles}>
                <OrderHistoryDetail  onCLose={() => setModel(false)} />
            </Modal>
        </div>
    );
}

export default DeliveryHistory;