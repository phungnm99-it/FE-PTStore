import React from "react";
import "../../css/productDetail/SpecDetail.css";
import iconClose from "../../images/iconClose.png";
function SpecDetail(props) {
  return (
    <div>
      <div className="detailSpecification">
        <div className="jquery-modal blocker current">
          <div className="modal" id="popup-modal">
            <table className="table table-border">
              <img
                className="icon-close"
                src={iconClose}
                alt="iconClose"
                onClick={() => props.onCLose()}
              />
              <tbody>
                <tr>
                  <th colspan="2">
                    <span className="f-16">Màn hình</span>
                  </th>
                </tr>
                <tr>
                  <td className="table-gray">
                    <strong>Độ phân giải:</strong>
                  </td>
                  <td>
                    <span>1668 x 2388 Pixels</span>
                  </td>
                </tr>
                <tr>
                  <td className="table-gray">
                    <strong>Màn hình rộng:</strong>
                  </td>
                  <td>
                    <span>11"</span>
                  </td>
                </tr>
                <tr>
                  <td className="table-gray">
                    <strong>Công nghệ màn hình:</strong>
                  </td>
                  <td>
                    <span>11"</span>
                  </td>
                </tr>
                <tr>
                  <th colspan="2">
                    <span className="f-16">Hệ điều hành &amp; CPU</span>
                  </th>
                </tr>
                <tr>
                  <td className="table-gray">
                    <strong>Hệ điều hành</strong>
                  </td>
                  <td>
                    <span>iPadOS 14</span>
                  </td>
                </tr>
                <tr>
                  <td className="table-gray">
                    <strong>Chip xử lý (CPU)</strong>
                  </td>
                  <td>
                    <span>Apple M1 8 nhân</span>
                  </td>
                </tr>
                <tr>
                  <td className="table-gray">
                    <strong>Chip đồ hoạ (GPU)</strong>
                  </td>
                  <td>
                    <span>Apple GPU 8 nhân</span>
                  </td>
                </tr>
                <tr>
                  <th colspan="2">
                    <span className="f-16">Camera</span>
                  </th>
                </tr>
                <tr>
                  <td className="table-gray">
                    <strong>Camera trước</strong>
                  </td>
                  <td>
                    <span>7538 mAh</span>
                  </td>
                </tr>
                <tr>
                  <td className="table-gray">
                    <strong>Camera sau</strong>
                  </td>
                  <td>
                    <span>7538 mAh</span>
                  </td>
                </tr>
                <tr>
                  <th colspan="2">
                    <span className="f-16">Bộ nhớ &amp; Lưu trữ</span>
                  </th>
                </tr>
                <tr>
                  <td className="table-gray">
                    <strong>RAM</strong>
                  </td>
                  <td>
                    <span>8 GB</span>
                  </td>
                </tr>
                <tr>
                  <td className="table-gray">
                    <strong>Bộ nhớ trong</strong>
                  </td>
                  <td>
                    <span>128 GB</span>
                  </td>
                </tr>
                <tr>
                  <th colspan="2">
                    <span className="f-16"> Kết nối</span>
                  </th>
                </tr>
                <tr>
                  <td className="table-gray">
                    <strong>Số khe SIM</strong>
                  </td>
                  <td>
                    <span>1 Nano SIM &amp; 1 eSIM</span>
                  </td>
                </tr>
                <tr>
                  <td className="table-gray">
                    <strong>WiFi</strong>
                  </td>
                  <td>
                    <ol className="ol-specs">
                      <li>Dual-band</li>
                      <li>Wi-Fi 802.11 a/b/g/n/ac/ax</li>
                      <li>Wi-Fi hotspot</li>
                    </ol>
                  </td>
                </tr>
                <tr>
                  <td className="table-gray">
                    <strong>Bluetooth</strong>
                  </td>
                  <td>
                    <ol className="ol-specs">
                      <li>A2DP</li>
                      <li>LE</li>
                      <li>v5.0</li>
                    </ol>
                  </td>
                </tr>
                <tr>
                  <td className="table-gray">
                    <strong>GPS</strong>
                  </td>
                  <td>
                    <ol className="ol-specs">
                      <li>A-GPS</li>
                      <li>GLONASS</li>
                    </ol>
                  </td>
                </tr>
                <tr>
                  <td className="table-gray">
                    <strong>Cổng kết nối/sạc</strong>
                  </td>
                  <td>
                    <span>Type-C</span>
                  </td>
                </tr>
                <tr>
                  <th colspan="2">
                    <span className="f-16">Pin &amp; Sạc</span>
                  </th>
                </tr>
                <tr>
                  <td className="table-gray">
                    <strong>Dung lượng pin</strong>
                  </td>
                  <td>
                    <span>7538 mAh</span>
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
