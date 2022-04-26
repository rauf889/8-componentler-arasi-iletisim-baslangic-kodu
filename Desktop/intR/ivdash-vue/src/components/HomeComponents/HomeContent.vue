<template>
  <!-- START PAGE CONTENT WRAPPER -->
  <div class="page-content-wrapper">
    <!-- START PAGE CONTENT -->
    <div class="content">
      
      <!-- START CONTAINER FLUID -->

      <div class="container-fluid container-fixed-lg">
        <!-- BEGIN PlACE PAGE CONTENT HERE -->
        <div class="row">
          <div class="col-lg-4">
            <div class="row">
              <div id="card-manage-cap" class="card card-default">
                <div class="card-header">
                  <div class="card-title">Manage Capture
                  </div>
                </div>
                <div class="card-body">
                  <h3>Packet Capture</h3>
                  <div class="row">
                    <div class="col-lg-6">
                      <button class="btn btn-primary btn-cons btn-block m-t-10" id="btn-start-capture">Start</button>
                    </div>
                    <div class="col-lg-6">
                      <button class="btn btn-danger btn-cons btn-block m-t-10" id="btn-stop-capture">Stop</button>
                    </div>
                  </div>
                  <div class="pgn-wrapper" data-position="top" style="top: 60px;"></div>
                </div>
                <div id="capture-progress" class="card-progress" style="background-color: rgba(255, 255, 255, 0.8); display: block;">
                  <div class="progress-circle-indeterminate progress-circle-master" style="display: none;"></div>
                </div>
              </div>
            </div>
            <div class="row">
              <div id="card-resources" class="card card-default">
                <div class="card-header">
                  <div class="card-title">Monitor Resources
                  </div>
                </div>
                <div class="card-body">
                  <h3>Resource Usage</h3>
                  <div class="row align-items-center">
                    <div class="col-lg-4">
                      CPU Usage
                    </div>
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4">
                      <div id="cpu-usage">
                        <strong class="place-middle"></strong>
                      </div>
                    </div>
                  </div>
                  <div class="row align-items-center">
                    <div class="col-lg-4">
                      RAM Usage
                    </div>
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4">
                      <div id="ram-usage">
                        <strong class="place-middle"></strong>
                      </div>
                    </div>
                  </div>
                  <div class="pgn-wrapper" data-position="top" style="top: 60px;"></div></div>
                <div id="resource-progress" class="card-progress" style="background-color: rgba(255, 255, 255, 0.8); display: block;">
                  <div class="progress-circle-indeterminate progress-circle-master" style="display: none;"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="row">
              <div class="col-lg-12">
                <div id="card-client-alerts" class="card card-default">
                <div class="card-header">
                  <div class="card-title">View Alerts
                  </div>
                  <div class="pull-right">
                    <!-- add rule button -->
                    <button class="btn btn-complete btn-lg" id="refresh-alert">
                      Refresh Table
                    </button>
                  </div>
                </div>
                <div class="card-body">
                  <h3>Alerts Related to the Host</h3>
                  <div class="row">
                    <div class="col-lg-12">
                      <table id="table-alerts">
                      <thead>
                        <tr>
                          <th>Alert ID</th>
                          <th>Alert Message</th>
                        </tr>
                      </thead>
                      <tbody>                      
                      </tbody>
                    </table>
                    </div>
                  </div>
                  <div class="pgn-wrapper" data-position="top" style="top: 60px;"></div></div>
                <div id="alert-progress" class="card-progress" style="background-color: rgba(255, 255, 255, 0.8); display: block;">
                  <div class="progress-circle-indeterminate progress-circle-master" style="display: none;"></div>
                </div>
              </div>
              </div>
            </div>
          </div>
          <!-- END PLACE PAGE CONTENT HERE -->
        </div>
        <!-- END CONTAINER FLUID -->
      </div>

      <!-- END PAGE CONTENT -->
    
    </div>
    <!-- END PAGE CONTENT WRAPPER -->
  </div>

</template>

<script>
export default {};
</script>

<style>
  strong.place-middle {
    position: absolute;
    top: 34%;
    left: 32%;
    font-size: 1.3em;
  }
</style>