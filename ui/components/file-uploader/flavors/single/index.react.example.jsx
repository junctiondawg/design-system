/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import className from 'classnames';
import { prefix as pf } from 'app_modules/ui/util/component';

let FileUploader = props =>
<div className={className(pf('form-element'), props.error ? pf('has-error') : null)}>
  <span className={pf('form-element__label')}>Attachment</span>
  <div className={pf('form-element__control')}>
    <label className={className(pf('file-uploader'), props.className)}>
      <div className={className(pf('file-uploader__dropzone'), props.draggover ? pf('has-drag-over') : null)}>
        <input className={pf('file-uploader__input assistive-text')} accept="image/png" type="file" id="file-upload-input-01" disabled={props.draggoverError} />
        <div className={pf('file-uploader__body')}>
          <span className={pf('file-uploader__button button button--brand')}>Upload file</span>
          <span className={pf('p-horizontal--x-small')}>or Drop files</span>
        </div>
      </div>
    </label>
  </div>
  { props.error ? <div className={pf('form-element__help')}>File type not supported</div> : null }
</div>;

export let states = [
  {
    id: 'single-file-uploader',
    label: 'Default',
    element: <FileUploader />
  },
  {
    id: 'single-file-uploader-error',
    label: 'Error',
    element: <FileUploader error />
  },
  {
    id: 'single-file-uploader-draggover',
    label: 'Dragover',
    element: <FileUploader draggover />
  },
  {
    id: 'single-file-uploader-draggover-error',
    label: 'Dragover with error',
    element: <FileUploader draggoverError error />
  }
];
