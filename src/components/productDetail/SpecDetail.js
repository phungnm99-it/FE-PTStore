import React from "react";
import "../../css/productDetail/SpecDetail.css";
import { useParams } from "react-router";
import productApi from "../../api/productApi";
import { useEffect, useState } from "react";
function SpecDetail(props) {
  const { id } = useParams();
  const [info, setInfo] = useState({});
  useEffect(() => {
    productApi.getAll(id).then((response) => {
      setInfo(response.data);
    });
  }, [id]);
  return (
    <div>
      <div className="detailSpecification">
        <div className="jquery-modal blocker current">
          <div className="modal" id="popup-modal">
            <img
              className="icon-close"
              src="http://res.cloudinary.com/dobsh4rbw/image/upload/v1639402353/commom/iconClose121321083143.png"
              alt="iconClose"
              onClick={() => props.onCLose()}
            />
            <table className="table table-border">
              <tbody>
                <tr>
                  <th colSpan="2">
                    <span className="f-16">Màn hình</span>
                  </th>
                </tr>
                <tr>
                  <td className="table-gray">
                    <strong>Độ phân giải:</strong>
                  </td>
                  <td>
                    <span>{info.screenResolution}</span>
                  </td>
                </tr>
                <tr>
                  <td className="table-gray">
                    <strong>Màn hình rộng:</strong>
                  </td>
                  <td>
                    <span>{info.screenSize}</span>
                  </td>
                </tr>
                <tr>
                  <td className="table-gray">
                    <strong>Công nghệ màn hình:</strong>
                  </td>
                  <td>
                    <span>{info.screenTech}</span>
                  </td>
                </tr>
                <tr>
                  <th colSpan="2">
                    <span className="f-16">Hệ điều hành &amp; CPU</span>
                  </th>
                </tr>
                <tr>
                  <td className="table-gray">
                    <strong>Hệ điều hành</strong>
                  </td>
                  <td>
                    <span>{info.os}</span>
                  </td>
                </tr>
                <tr>
                  <td className="table-gray">
                    <strong>Chip xử lý (CPU)</strong>
                  </td>
                  <td>
                    <span>{info.cpu}</span>
                  </td>
                </tr>
                <tr>
                  <td className="table-gray">
                    <strong>Chip đồ hoạ (GPU)</strong>
                  </td>
                  <td>
                    <span>{info.gpu}</span>
                  </td>
                </tr>
                <tr>
                  <th colSpan="2">
                    <span className="f-16">Camera</span>
                  </th>
                </tr>
                <tr>
                  <td className="table-gray">
                    <strong>Camera trước</strong>
                  </td>
                  <td>
                    <span>{info.frontCamera}</span>
                  </td>
                </tr>
                <tr>
                  <td className="table-gray">
                    <strong>Camera sau</strong>
                  </td>
                  <td>
                    <span>{info.backCamera}</span>
                  </td>
                </tr>
                <tr>
                  <th colSpan="2">
                    <span className="f-16">Bộ nhớ &amp; Lưu trữ</span>
                  </th>
                </tr>
                <tr>
                  <td className="table-gray">
                    <strong>RAM</strong>
                  </td>
                  <td>
                    <span>{info.ram}</span>
                  </td>
                </tr>
                <tr>
                  <td className="table-gray">
                    <strong>Bộ nhớ trong</strong>
                  </td>
                  <td>
                    <span>{info.rom}</span>
                  </td>
                </tr>
                <tr>
                  <th colSpan="2">
                    <span className="f-16"> Kết nối</span>
                  </th>
                </tr>
                <tr>
                  <td className="table-gray">
                    <strong>Số khe SIM</strong>
                  </td>
                  <td>
                    <span>{info.sim}</span>
                  </td>
                </tr>
                <tr>
                  <td className="table-gray">
                    <strong>WiFi</strong>
                  </td>
                  <td>
                    {info.wifi}
                    {/* <ol className="ol-specs">{info.wifi}</ol> */}
                  </td>
                </tr>
                {/* <tr>
                  <td className="table-gray">
                    <strong>Bluetooth</strong>
                  </td>
                  <td>
                    <ol className="ol-specs">{info.bluetooth}</ol>
                  </td>
                </tr> */}
                <tr>
                  <td className="table-gray">
                    <strong>GPS</strong>
                  </td>
                  <td>
                    {info.gps}
                    {/* <ol className="ol-specs">
                      <li>A-GPS</li>
                      <li>GLONASS</li>
                    </ol> */}
                  </td>
                </tr>
                {/* <tr>
                  <td className="table-gray">
                    <strong>Cổng kết nối/sạc</strong>
                  </td>
                  <td>
                    <span>Type-C</span>
                  </td>
                </tr> */}
                <tr>
                  <th colSpan="2">
                    <span className="f-16">Pin &amp; Sạc</span>
                  </th>
                </tr>
                <tr>
                  <td className="table-gray">
                    <strong>Dung lượng pin</strong>
                  </td>
                  <td>
                    <span>{info.battery}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecDetail;
