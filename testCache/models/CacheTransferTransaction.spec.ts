/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2017 NEM
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { expect } from "chai";
import { CacheAddress } from '../../src/cacheModel/cacheAccount/CacheAddress';
import { CACHE } from '../../src/cacheModel/cacheMosaic/CACHE';
import {
  CacheTransferTransaction,
  ExpirationType
} from '../../src/cacheModel/cacheTransaction/CacheTransferTransaction';
import { XEM } from '../../src/models/mosaic/XEM'
import { PlainMessage } from '../../src/models/transaction/PlainMessage';

describe("CacheTransferTransaction", () => {

  it("should return cache transaction", () => {
    const cacheTransferTransaction = CacheTransferTransaction.createWithCache(
      new CacheAddress("TCJZJHAV63RE2JSKN27DFIHZRXIHAI736WXEOJGA"),
      new CACHE(100),
      PlainMessage.create("test message"),
      ExpirationType.twoHour
    );
    expect(cacheTransferTransaction.mosaicDetails().quantity()).to.be.equal(100 * 1e6);
    expect(cacheTransferTransaction.mosaicDetails().amount).to.be.equal(100 );
    expect(cacheTransferTransaction.mosaicDetails().mosaicId).to.be.equal(CACHE.MOSAICID);
  });

  it("should return xem transaction", () => {
    const cacheTransferTransaction = CacheTransferTransaction.createWithXem(
      new CacheAddress("TCJZJHAV63RE2JSKN27DFIHZRXIHAI736WXEOJGA"),
      new XEM(200),
      PlainMessage.create("test message"),
      ExpirationType.twoHour
    );
    expect(cacheTransferTransaction.mosaicDetails().quantity()).to.be.equal(200 * 1e6);
    expect(cacheTransferTransaction.mosaicDetails().amount).to.be.equal(200);
    expect(cacheTransferTransaction.mosaicDetails().mosaicId).to.be.equal(XEM.MOSAICID);
  });
});