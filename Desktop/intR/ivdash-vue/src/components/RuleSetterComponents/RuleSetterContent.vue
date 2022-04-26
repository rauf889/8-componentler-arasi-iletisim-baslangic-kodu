<template>
  <div class="page-content-wrapper">
    <!-- START PAGE CONTENT -->
    <div class="content">
     
      <!-- START CONTAINER FLUID -->
      <div class="container-fluid container-fixed-lg">
        <!-- BEGIN PlACE PAGE CONTENT HERE -->
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-12">
                <div id="card-rules" class="card card-default">
                  <div class="card-header">
                    <div class="card-title">View Rules
                    </div>
                    <div class="pull-right">
                      <!-- add rule button -->
                      <button class="btn btn-complete btn-lg" data-toggle="modal" data-target="#add-rule-modal">
                        Add Rule
                      </button>
                    </div>
                  </div>
                  <div class="card-body">
                    <h3>Currently Applied Rules</h3>
                    <div class="row">
                      <div class="col-lg-12">
                        <table id="table-rules">
                          <thead>
                          <tr>
                            <th>Protocol</th>
                            <th>Source IP</th>
                            <th>Source Port</th>
                            <th>Destination IP</th>
                            <th>Destination Port</th>
                            <th>Rule Options</th>
                            <th>Action</th>
                          </tr>
                          </thead>
                          <tbody>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="pgn-wrapper" data-position="top" style="top: 60px;"></div>
                  </div>
                  <div id="rule-fetch-progress" class="card-progress" style="background-color: rgba(255, 255, 255, 0.8); display: block;">
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

<!-- Modal -->
<!-- <div class="modal fade slide-up disable-scroll" id="add-rule-modal" tabindex="-1" role="dialog" aria-labelledby="add-rule-modal-label" aria-hidden="false">
  <div class="modal-dialog ">
    <div class="modal-content-wrapper">
      <div class="modal-content">
        <div class="modal-header clearfix text-left">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
            <i class="pg-icon fs-14">close</i>
          </button>
          <h5>Add a New Rule</h5>
        </div>
        <div class="modal-body">
          <form action="">
            <div class="form-group-attached">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group form-group-default">
                    <label>Protocol</label>
                    <select class="form-control" id="rule-protocol">
                      <option value="tcp">TCP</option>
                      <option value="udp">UDP</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group form-group-default">
                    <label>Source IP (or any)</label>
                    <input type="text" class="form-control" id="rule-source-ip">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group form-group-default">
                    <label>Source Port (or any)</label>
                    <input type="text" class="form-control" id="rule-source-port">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group form-group-default">
                    <label>Destination IP (or any)</label>
                    <input type="text" class="form-control" id="rule-dest-ip">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group form-group-default">
                    <label>Destination Port (or any)</label>
                    <input type="text" class="form-control" id="rule-dest-port">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group form-group-default">
                    <label>Rule Options</label>
                    <textarea class="form-control" id="rule-options"></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-md-12 text-center">
                <button class="btn btn-complete btn-lg" id="complete-addition">
                  Complete Addition
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div> -->
    <!-- /.modal-content -->






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